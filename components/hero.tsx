import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Stats } from "@/components/stats";
import { GithubIcon } from "@/components/icons/github";

interface HeroProps {
  totalProjects: number;
  totalCategories: number;
  lastUpdated: string;
}

export function Hero({ totalProjects, totalCategories, lastUpdated }: HeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pt-28">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Discover Hidden GitHub Goldmines
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-muted-foreground">
          A curated collection of underrated open-source projects worth knowing.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" render={<Link href="#projects" />}>
            Browse Projects
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={
              <a
                href="https://github.com/Slightsmile/github-treasure"
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            <GithubIcon className="size-4" />
            GitHub
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-2xl">
        <Stats
          totalProjects={totalProjects}
          totalCategories={totalCategories}
          lastUpdated={lastUpdated}
        />
      </div>
    </section>
  );
}
