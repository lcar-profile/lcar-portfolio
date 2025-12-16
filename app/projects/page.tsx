import { allProjects } from "./data";
import ProjectCarousel from "./components/projectCarousel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lai Carson | Projects",
  description: "A collection of my personal and university projects",
};

export default function Projects() {
  const projects = allProjects;

  return (
    <div className="flex flex-col w-full max-w-4xl items-center">
      <div className="flex flex-col pb-8 items-center">
        <h1 className="pb-4 text-2xl font-semibold text-accent">Projects</h1>
        <h3 className="text-sm">
          A collection of my personal and university projects
        </h3>
      </div>
      <ProjectCarousel projects={projects} />
    </div>
  );
}
