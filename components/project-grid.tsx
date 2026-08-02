"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Shuffle } from "lucide-react";
import { SearchBar } from "@/components/search-bar";
import { CategoryFilter } from "@/components/category-filter";
import { ProjectCard } from "@/components/project-card";
import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { createSearchIndex, searchProjects } from "@/lib/search";
import type { Project, SortOption } from "@/types/project";

const PAGE_SIZE = 15;

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "alphabetical", label: "Alphabetical" },
  { value: "random", label: "Random" },
];

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
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

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
    setVisibleCount(PAGE_SIZE);
  }, []);

  const clearFilters = useCallback(() => {
    setSelectedCategories([]);
    setQuery("");
    setVisibleCount(PAGE_SIZE);
  }, []);

  const handleQueryChange = useCallback((value: string) => {
    setQuery(value);
    setVisibleCount(PAGE_SIZE);
  }, []);

  const handleSortChange = useCallback((value: SortOption) => {
    setSort(value);
    setVisibleCount(PAGE_SIZE);
    if (value === "random") setRandomSeed(Date.now());
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

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <div className="flex flex-col gap-6">
        <SearchBar value={query} onChange={handleQueryChange} />

        <CategoryFilter
          categories={categories}
          selected={selectedCategories}
          onToggle={toggleCategory}
          onClear={clearFilters}
        />

        <p className="text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSortChange(option.value)}
              aria-pressed={sort === option.value}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                sort === option.value
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card text-foreground hover:border-accent/50"
              )}
            >
              {option.label}
            </button>
          ))}
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

        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center pt-4">
                <Button variant="outline" onClick={() => setVisibleCount(filtered.length)}>
                  Load More
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
