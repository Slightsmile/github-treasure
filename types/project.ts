export interface Project {
  slug: string;
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  language: string | null;
  stars: number | null;
  dateAdded: string;
}

export type SortOption = "newest" | "alphabetical" | "random";
