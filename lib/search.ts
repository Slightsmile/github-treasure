import Fuse from "fuse.js";
import type { Project } from "@/types/project";

const fuseOptions: ConstructorParameters<typeof Fuse<Project>>[1] = {
  keys: [
    { name: "name", weight: 0.4 },
    { name: "description", weight: 0.25 },
    { name: "tags", weight: 0.2 },
    { name: "category", weight: 0.1 },
    { name: "language", weight: 0.05 },
  ],
  threshold: 0.35,
  ignoreLocation: true,
  includeMatches: true,
};

export function createSearchIndex(projects: Project[]) {
  return new Fuse(projects, fuseOptions);
}

export function searchProjects(fuse: Fuse<Project>, query: string): Project[] {
  if (!query.trim()) return [];
  return fuse.search(query).map((result) => result.item);
}
