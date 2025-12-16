import { allProjects } from "../data";
import { notFound } from "next/navigation";
import Badge from "@/app/components/badge";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Globe } from "lucide-react";
import Separator from "@/app/components/separator";
import HoverLink from "@/app/components/hoverLink";
import { ProjectParams } from "@/app/types";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { title, subtitle } = allProjects.find((p) => p.path === slug) ?? {
    title: "Project",
    subtitle: "Description not found.",
  };

  return {
    title: `Lai Carson | ${title}`,
    description: subtitle,
  };
}

export function generateStaticParams() {
  return (Object.keys(ProjectParams) as Array<keyof typeof ProjectParams>).map(
    (key) => {
      return { slug: ProjectParams[key] };
    }
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.path.endsWith(slug));

  if (!project) {
    notFound();
  }

  const { title, subtitle, tags, github, live, body } = project;

  const index = allProjects.findIndex((p) => p.title === title);
  const prev = index > 0 ? allProjects[index - 1] : null;
  const next = index < allProjects.length - 1 ? allProjects[index + 1] : null;

  return (
    <div className="flex flex-col w-full max-w-4xl">
      <div className="flex flex-col mx-auto px-4 items-center">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-3xl font-bold text-accent">{title}</h1>
          <p className="mb-2 text-muted-foreground">{subtitle}</p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
            <div className="flex flex-row gap-2">
              {tags.map((t) => {
                return <Badge key={t} label={t}></Badge>;
              })}
            </div>
            <div className="flex flex-row gap-2">
              {github && (
                <Button
                  className="flex flex-row gap-1.5"
                  variant="default"
                  asChild
                >
                  <Link href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub></FaGithub>
                    GitHub
                    <ExternalLink></ExternalLink>
                  </Link>
                </Button>
              )}
              {live && (
                <Button
                  className="flex flex-row gap-1.5"
                  variant="secondary"
                  asChild
                >
                  <Link href={live} target="_blank" rel="noopener noreferrer">
                    <Globe></Globe>
                    Live
                    <ExternalLink></ExternalLink>
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
        <Separator></Separator>
        <div className="flex flex-col gap-5">{body}</div>
        <Separator />
        <div className="flex flex-col w-full gap-4 items-center">
          <div className="text-muted-foreground text-sm">
            View other projects
          </div>
          <div className="flex flex-row w-full items-center justify-between">
            <div>
              {prev && (
                <HoverLink
                  href={prev.path}
                  className="self-start text-sm flex flex-row items-center gap-1"
                >
                  <ArrowLeft size={12} strokeWidth={1.5}></ArrowLeft>
                  {prev.title}
                </HoverLink>
              )}
            </div>
            <div>
              {next && (
                <HoverLink
                  href={next.path}
                  className="self-end text-sm flex flex-row items-center gap-1"
                >
                  {next.title}
                  <ArrowRight size={12} strokeWidth={1.5}></ArrowRight>
                </HoverLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
