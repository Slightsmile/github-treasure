import type { MetadataRoute } from "next";

const siteUrl = "https://github-treasures.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/about`, lastModified: new Date() },
  ];
}
