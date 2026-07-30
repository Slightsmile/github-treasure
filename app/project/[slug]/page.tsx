import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Button variant="ghost" size="sm" className="gap-1.5" render={<Link href="/" />}>
        <ArrowLeft className="size-3.5" />
        Back
      </Button>

      <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.name}
        </h1>
        {project.stars !== null && (
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="size-4" />
            {project.stars.toLocaleString()}
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <Badge variant="secondary" className="rounded-full">
          {project.category}
        </Badge>
        {project.language && (
          <Badge variant="outline" className="rounded-full">
            {project.language}
          </Badge>
        )}
        {project.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="rounded-full text-muted-foreground">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
        <h2 className="text-sm font-medium text-muted-foreground">
          Why it&apos;s interesting
        </h2>
        <p className="mt-2 leading-relaxed">{project.description}</p>
      </div>

      <div className="mt-8 flex aspect-video items-center justify-center rounded-2xl border border-dashed border-border text-sm text-muted-foreground">
        Screenshot placeholder
      </div>

      <div className="mt-8">
        <Button render={<a href={project.url} target="_blank" rel="noreferrer" />}>
          Open Repository
          <ArrowUpRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
