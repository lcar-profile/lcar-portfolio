import Link from "next/link";
import Image from "next/image";
import Badge from "../components/badge";
import { allProjects } from "./data";

export default function Projects() {
  const projects = allProjects;
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-3xl">
      {projects.map((project) => {
        return (
          <div
            key={project.title}
            className="flex flex-col border-1 rounded-sm overflow-hidden"
          >
            <Image
              src="/images/background.png"
              width={1920}
              height={1920}
              alt="Default background"
            />
            <div className="flex flex-col p-3 gap-2 ">
              <span className="font-bold text-lg">{project.title}</span>
              <span className="flex flex-row gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} label={tag}></Badge>
                ))}
              </span>
              <span>{project.subtitle}</span>
              <Link className="self-center" href={project.path ?? ""}>
                See More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
