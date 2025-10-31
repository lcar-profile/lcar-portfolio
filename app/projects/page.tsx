import Link from "next/link";
import { Framework, Language } from "../types/tags";

interface Project {
  title: string;
  tags: (Language | Framework)[];
  description?: string;
  path?: string;
}

const projects: Project[] = [
  {
    title: "Reversi Game",
    tags: [Language.JS, Framework.REACT],
  },
  {
    title: "NewsPortal",
    tags: [Language.JS],
  },
  {
    title: "eWallet Prototype",
    tags: [],
  },
];

export default function Projects() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {projects.map((project) => {
        return (
          <div
            key={project.title}
            className="flex flex-col p-4 border-1 rounded-sm"
          >
            <span>{project.title}</span>
            <span className="flex flex-row gap-2">
              {project.tags.map((tag) => {
                return (
                  <div key={tag} className="px-2 py-1 border-1 rounded-sm">
                    {tag}
                  </div>
                );
              })}
            </span>
            <span>{project.description ?? "No description provided."}</span>
            <Link href={project.path ?? ""}>See More</Link>
          </div>
        );
      })}
    </div>
  );
}
