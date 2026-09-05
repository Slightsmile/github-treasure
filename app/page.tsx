import { Suspense } from "react";
import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-grid";
import { getAllProjects, getAllCategories, getStats } from "@/lib/projects";

const siteUrl = "https://github-treasures.vercel.app";

export default function HomePage() {
  const projects = getAllProjects();
  const categories = getAllCategories();
  const stats = getStats();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "GitHub Treasures",
        description:
          "Discover underrated GitHub projects and hidden open-source gems.",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/#collection`,
        url: siteUrl,
        name: "Underrated GitHub Projects & Hidden Gems",
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: stats.totalProjects,
          itemListElement: projects.slice(0, 50).map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: project.url,
            name: project.name,
          })),
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
