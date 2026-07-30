"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: { name: string; count: number }[];
  selected: string[];
  onToggle: (category: string) => void;
  onClear: () => void;
}

export function CategoryFilter({
  categories,
  selected,
  onToggle,
  onClear,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((category) => {
        const isActive = selected.includes(category.name);
        return (
          <button
            key={category.name}
            onClick={() => onToggle(category.name)}
            aria-pressed={isActive}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition-colors",
              isActive
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border bg-card text-foreground hover:border-accent/50"
            )}
          >
            {category.name}
            <span
              className={cn(
                "text-xs tabular-nums",
                isActive ? "text-accent-foreground/70" : "text-muted-foreground"
              )}
            >
              {category.count}
            </span>
          </button>
        );
      })}

      {selected.length > 0 && (
        <Button variant="ghost" size="sm" onClick={onClear} className="gap-1">
          <X className="size-3.5" />
          Clear Filters
        </Button>
      )}
    </div>
  );
}
