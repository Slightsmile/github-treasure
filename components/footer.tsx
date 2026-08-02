import Link from "next/link";
import { Gem } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div>
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <Gem className="size-4 text-accent" />
            GitHub Treasures
          </div>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Discover underrated open source.
          </p>
        </div>

        <nav className="flex gap-6 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <a
            href="https://github.com/Slightsmile/github-treasure"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </nav>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {year} GitHub Treasures. Made for developers ❤️</span>
          <span>
            Made by{" "}
            <a
              href="https://mohi-uddin.me/"
              target="_blank"
              rel="noreferrer"
              className="font-medium transition-colors hover:text-foreground"
            >
              Slightsmile
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
