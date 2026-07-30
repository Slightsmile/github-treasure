"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Shuffle } from "lucide-react";
import { SearchBar } from "@/components/search-bar";
import { CategoryFilter } from "@/components/category-filter";
import { ProjectCard } from "@/components/project-card";
import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createSearchIndex, searchProjects } from "@/lib/search";
import type { Project, SortOption } from "@/types/project";

interface ProjectGridProps {
  projects: Project[];
  categories: { name: string; count: number }[];
}

function parseCategories(param: string | null): string[] {
  return param ? param.split(",").filter(Boolean) : [];
}

export function ProjectGrid({ projects, categories }: ProjectGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    parseCategories(searchParams.get("categories"))
  );
  const [sort, setSort] = useState<SortOption>(
    (searchParams.get("sort") as SortOption) ?? "newest"
  );
  const [randomSeed, setRandomSeed] = useState(0);

  const fuse = useMemo(() => createSearchIndex(projects), [projects]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (selectedCategories.length) params.set("categories", selectedCategories.join(","));
    if (sort !== "newest") params.set("sort", sort);
    const qs = params.toString();
    router.replace(qs ? `/?${qs}` : "/", { scroll: false });
  }, [query, selectedCategories, sort, router]);

  const toggleCategory = useCallback((category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  }, []);

  const clearFilters = useCallback(() => {
    setSelectedCategories([]);
    setQuery("");
  }, []);

  const filtered = useMemo(() => {
    let result = query.trim() ? searchProjects(fuse, query) : projects;

    if (selectedCategories.length) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    const sorted = [...result];
    if (sort === "alphabetical") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "newest") {
      sorted.sort((a, b) => b.dateAdded.localeCompare(a.dateAdded));
    } else if (sort === "random") {
      let seed = randomSeed || 1;
      const rand = () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
      };
      for (let i = sorted.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [sorted[i], sorted[j]] = [sorted[j], sorted[i]];
      }
    }

    return sorted;
  }, [query, selectedCategories, sort, fuse, projects, randomSeed]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <div className="flex flex-col gap-6">
        <SearchBar value={query} onChange={setQuery} />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <CategoryFilter
            categories={categories}
            selected={selectedCategories}
            onToggle={toggleCategory}
            onClear={clearFilters}
          />

          <div className="flex shrink-0 items-center gap-2">
            <Select
              value={sort}
              onValueChange={(v) => {
                setSort(v as SortOption);
                if (v === "random") setRandomSeed(Date.now());
              }}
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="alphabetical">Alphabetical</SelectItem>
                <SelectItem value="random">Random</SelectItem>
              </SelectContent>
            </Select>
            {sort === "random" && (
              <Button
                variant="outline"
                size="icon"
                aria-label="Shuffle"
                onClick={() => setRandomSeed(Date.now())}
              >
                <Shuffle className="size-4" />
              </Button>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </p>

        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
