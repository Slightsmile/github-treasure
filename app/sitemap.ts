import type { MetadataRoute } from "next";
import { getStats } from "@/lib/projects";

const siteUrl = "https://github-treasures.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const { lastUpdated } = getStats();
  const lastModified = new Date(lastUpdated);

  return [
    { url: siteUrl, lastModified, changeFrequency: "daily", priority: 1 },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.5 },
  ];
}
