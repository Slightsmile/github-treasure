import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";

const siteUrl = "https://github-treasures.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = getAllProjects().map((project) => ({
    url: `${siteUrl}/project/${project.slug}`,
    lastModified: project.dateAdded,
  }));

  return [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/about`, lastModified: new Date() },
    ...projectEntries,
  ];
}
