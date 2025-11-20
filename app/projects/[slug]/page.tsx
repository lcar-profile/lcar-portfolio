"use client";

import { use } from "react";
import { allProjects } from "../data";
import ProjectBase from "../../components/projectBase";
import { notFound } from "next/navigation";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = allProjects.find((p) => p.path.endsWith(slug));

  if (!project) {
    notFound();
  }

  const index = allProjects.findIndex((p) => p.title === project.title);
  const prev = index > 0 ? allProjects[index - 1] : null;
  const next =
    index < allProjects.length - 1 ? allProjects[index + 1] : null;

  return <ProjectBase {...project} prev={prev} next={next} />;
}
