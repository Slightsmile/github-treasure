import { Suspense } from "react";
import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-grid";
import { getAllProjects, getAllCategories, getStats } from "@/lib/projects";

export default function HomePage() {
  const projects = getAllProjects();
  const categories = getAllCategories();
  const stats = getStats();

  return (
    <>
      <Hero
        totalProjects={stats.totalProjects}
        totalCategories={stats.totalCategories}
        lastUpdated={stats.lastUpdated}
      />
      <Suspense>
        <ProjectGrid projects={projects} categories={categories} />
      </Suspense>
    </>
  );
}
