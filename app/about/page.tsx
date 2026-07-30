import type { Metadata } from "next";
import { Search, Filter, Moon, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "About GitHub Treasures — a curated directory of underrated open-source GitHub projects.",
};

const features = [
  { icon: Search, label: "Fast search" },
  { icon: Filter, label: "Category filters" },
  { icon: Zap, label: "Minimal UI" },
  { icon: Moon, label: "Dark mode" },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        About GitHub Treasures
      </h1>

      <div className="mt-8 space-y-5 text-muted-foreground">
        <p>
          GitHub Treasures is a curated directory of underrated open-source GitHub
          projects that deserve more attention.
        </p>
        <p>
          The goal is to help developers discover useful tools, libraries,
          frameworks, and utilities that often go unnoticed despite their quality.
        </p>
        <p>This collection is community-driven and continuously evolving.</p>
        <p>
          The initial collection has been compiled from discussions on the
          TorrentBD Forum, a community-driven forum where members frequently share
          valuable GitHub repositories, developer tools, and hidden open-source
          gems. The projects have been organized into a searchable and categorized
          directory to make discovery easier.
        </p>
        <p>
          This website is intended for educational purposes and to promote the
          open-source ecosystem by making exceptional projects more discoverable.
        </p>
      </div>

      <h2 className="mt-12 text-lg font-semibold tracking-tight">Features</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {features.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card px-4 py-6 text-center"
          >
            <Icon className="size-5 text-accent" />
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm text-muted-foreground">
        Static and blazing fast. Made for developers ❤️
      </p>
    </section>
  );
}
