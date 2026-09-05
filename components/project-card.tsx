"use client";

import Image from "next/image";
import { GitFork, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";
import { LANGUAGE_COLORS } from "@/lib/language-colors";

export function ProjectCard({ project }: { project: Project }) {
  const [owner, repoName] = project.name.split("/");
  const displayAuthor = project.author ?? owner;
  const displayName = repoName ?? project.name;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40"
    >
      <div className="flex items-start gap-3">
        <div className="size-9 shrink-0 overflow-hidden rounded-full bg-muted">
          {project.avatar && (
            <Image
              src={project.avatar}
              alt=""
              width={36}
              height={36}
              className="size-9 object-cover"
            />
          )}
        </div>
        <div className="min-w-0">
          <p className="truncate font-semibold tracking-tight group-hover:text-accent">
            {displayName}
          </p>
          <p className="truncate text-xs text-muted-foreground">by {displayAuthor}</p>
        </div>
      </div>

      <p className="mt-3 line-clamp-2 flex-1 text-sm text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <Badge variant="secondary" className="rounded-full">
          {project.category}
        </Badge>
        {project.tags.slice(0, 2).map((tag) => (
          <Badge key={tag} variant="outline" className="rounded-full text-muted-foreground">
            {tag}
          </Badge>
        ))}
        {project.tags.length > 2 && (
          <Badge variant="outline" className="rounded-full text-muted-foreground">
            +{project.tags.length - 2}
          </Badge>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
        {project.language ? (
          <span className="flex items-center gap-1.5">
            <span
              className="size-2.5 rounded-full"
              style={{ background: languageColor(project.language) }}
            />
            {project.language}
          </span>
        ) : (
          <span />
        )}
        <div className="flex items-center gap-3">
          {project.stars !== null && (
            <span className="flex items-center gap-1">
              <Star className="size-3.5" />
              {formatCount(project.stars)}
            </span>
          )}
          {project.forks !== null && (
            <span className="flex items-center gap-1">
              <GitFork className="size-3.5" />
              {formatCount(project.forks)}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}

function languageColor(language: string): string {
  return LANGUAGE_COLORS[language] ?? "var(--muted-foreground)";
}

function formatCount(count: number): string {
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
  return String(count);
}
