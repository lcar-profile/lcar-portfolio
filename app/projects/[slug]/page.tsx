"use client";

import { use } from "react";
import { allProjects } from "../data";
import ProjectBase from "../../components/projectBase";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = allProjects.find((p) => p.path.endsWith(slug));

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectBase {...project} />;
}
