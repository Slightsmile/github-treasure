"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { GithubIcon } from "@/components/icons/github";
import { cn } from "@/lib/utils";

const GITHUB_REPO_URL = "https://github.com/Slightsmile/github-treasure";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-200",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight justify-self-start"
        >
          <Image
            src="/logo.svg"
            alt=""
            width={28}
            height={28}
            className="size-7 dark:invert"
            priority
          />
          <span className="hidden sm:inline">GitHub Treasures</span>
        </Link>

        <nav className="hidden items-center gap-1 justify-self-center md:flex">
          {links.map((link) => (
            <Button key={link.href} variant="ghost" size="sm" render={<Link href={link.href} />}>
              {link.label}
            </Button>
          ))}
          <Button
            variant="ghost"
            size="sm"
            render={<a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer" />}
          >
            GitHub
          </Button>
        </nav>

        <div className="flex items-center gap-1 justify-self-end">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="hidden size-9 sm:flex"
            aria-label="GitHub"
            render={<a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer" />}
          >
            <GithubIcon className="size-4" />
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-9 md:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="size-4" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-64">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <nav className="mt-10 flex flex-col gap-1 px-2">
                {links.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    className="justify-start"
                    render={<Link href={link.href} />}
                  >
                    {link.label}
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  className="justify-start"
                  render={<a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer" />}
                >
                  GitHub
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
