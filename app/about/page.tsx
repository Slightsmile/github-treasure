import type { Metadata } from "next";
import { Search, Filter, Moon, Zap, Star, MessageSquarePlus } from "lucide-react";
import { GithubIcon } from "@/components/icons/github";

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

      <div className="mt-12 rounded-2xl border border-border bg-card p-6">
        <div className="flex items-start gap-3">
          <Star className="mt-0.5 size-5 shrink-0 text-accent" />
          <p>
            If you find GitHub Treasures useful,{" "}
            <a
              href="https://github.com/Slightsmile/github-treasure"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground underline underline-offset-4 hover:text-accent"
            >
              star the repo on GitHub
            </a>{" "}
            to support the project.
          </p>
        </div>
        <div className="mt-4 flex items-start gap-3">
          <MessageSquarePlus className="mt-0.5 size-5 shrink-0 text-accent" />
          <p>
            Want to suggest a new project or report an issue? Please{" "}
            <a
              href="https://github.com/Slightsmile/github-treasure/issues"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground underline underline-offset-4 hover:text-accent"
            >
              open an issue on GitHub
            </a>
            .
          </p>
        </div>
      </div>

      <p className="mt-12 flex items-center gap-2 text-sm text-muted-foreground">
        <GithubIcon className="size-4" />
        Static and blazing fast. Made by{" "}
        <a
          href="https://mohi-uddin.me/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-foreground transition-colors hover:text-accent"
        >
          Slightsmile
        </a>
      </p>
    </section>
  );
}
