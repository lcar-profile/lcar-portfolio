"use client";

import Link from "next/link";
import Image from "next/image";
import Badge from "../components/badge";
import { allProjects } from "./data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Globe } from "lucide-react";
import Separator from "../components/separator";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const projects = allProjects;

  useEffect(() => {
    if (!api) return;

    const update = () => {
      const snapList = api.scrollSnapList();
      setCount(snapList.length);
      setCurrent(api.selectedScrollSnap() + 1);
    };

    update();

    api.on("select", update);
  }, [api]);

  return (
    <div className="flex flex-col w-full max-w-4xl items-center">
      <div className="flex flex-col pb-8 items-center">
        <h1 className="pb-4 text-2xl font-semibold text-accent">Projects</h1>
        <h3 className="text-sm">
          A collection of my personal and university projects
        </h3>
      </div>
      <Carousel
        setApi={setApi}
        className="mb-8 w-[65vw] max-w-4xl"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {projects.map((project, id) => {
            return (
              <CarouselItem key={id} className="md:basis-1/3">
                <div
                  className={`flex flex-col h-full bg-background border-1 rounded-sm overflow-hidden ${
                    id === current - 1 && "border-primary border-2"
                  }`}
                >
                  <Image
                    src={project.image ?? "/images/background.png"}
                    width={1920}
                    height={1920}
                    alt="Default background"
                  />
                  <div className="flex flex-col p-3 gap-2 justify-between h-full">
                    <div className="flex flex-col gap-2 mb-3">
                      <div className="flex flex-row items-center gap-2">
                        <div className="font-bold text-lg">{project.title}</div>
                        {(project.github || project.live) && (
                          <div className="flex flex-row gap-1 bg-foreground text-background p-1 rounded-full items-center justify-center">
                            {project.github && (
                              <div
                                title="Repository available"
                                aria-label="Repository available"
                              >
                                <FaGithub size={14} />
                              </div>
                            )}
                            {project.live && (
                              <div
                                title="Live version available"
                                aria-label="Live version available"
                              >
                                <Globe size={14} />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-row gap-2 flex-wrap">
                        {project.tags.map((tag) => (
                          <Badge key={tag} label={tag}></Badge>
                        ))}
                      </div>
                      <div className="text-ellipsis text-sm">
                        {project.subtitle}
                      </div>
                    </div>
                    <Link
                      className=" self-center"
                      href={project.path ?? ""}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>View Project</Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex flex-row gap-2">
        {projects.map((_, id) => {
          return (
            <div
              key={id}
              className={`w-4 h-4 rounded-xl ${
                id === current - 1 ? "bg-accent" : "bg-muted-foreground"
              }`}
            ></div>
          );
        })}
      </div>
      <div className="text-muted-foreground py-2 text-center text-xs">
        {current} of {count}
      </div>
      <Separator></Separator>
    </div>
  );
}
