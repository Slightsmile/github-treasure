"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Check, Copy, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(project.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40">
      <div className="flex items-start justify-between gap-3">
        <Link
          href={`/project/${project.slug}`}
          className="min-w-0 flex-1 font-semibold tracking-tight hover:text-accent"
        >
          <span className="truncate block">{project.name}</span>
        </Link>
        {project.stars !== null && (
          <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
            <Star className="size-3.5" />
            {formatStars(project.stars)}
          </span>
        )}
      </div>

      <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <Badge variant="secondary" className="rounded-full">
          {project.category}
        </Badge>
        {project.language && (
          <Badge variant="outline" className="rounded-full">
            {project.language}
          </Badge>
        )}
        {project.tags.slice(0, 2).map((tag) => (
          <Badge key={tag} variant="outline" className="rounded-full text-muted-foreground">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent"
        >
          Open Repository
          <ArrowUpRight className="size-3.5" />
        </a>
        <Button
          variant="ghost"
          size="icon"
          className="size-8"
          aria-label="Copy repository link"
          onClick={handleCopy}
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        </Button>
      </div>
    </div>
  );
}

function formatStars(stars: number): string {
  if (stars >= 1000) return `${(stars / 1000).toFixed(1)}k`;
  return String(stars);
}
