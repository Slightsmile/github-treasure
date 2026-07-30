import projectsData from "@/data/projects.json";
import type { Project } from "@/types/project";

export function getAllProjects(): Project[] {
  return projectsData as Project[];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getAllCategories(): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const project of getAllProjects()) {
    counts.set(project.category, (counts.get(project.category) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function getStats() {
  const projects = getAllProjects();
  const categories = new Set(projects.map((p) => p.category));
  const lastUpdated = projects.reduce((latest, p) => {
    return p.dateAdded > latest ? p.dateAdded : latest;
  }, projects[0]?.dateAdded ?? "");

  return {
    totalProjects: projects.length,
    totalCategories: categories.size,
    lastUpdated,
  };
}
