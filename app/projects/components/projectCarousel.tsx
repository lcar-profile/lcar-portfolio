"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { ProjectCarouselProps } from "../../types";
import Card from "@/app/components/card";
import { FaGithub } from "react-icons/fa";
import { Globe } from "lucide-react";
import Badge from "@/app/components/badge";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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
    <div className="flex flex-col w-full items-center">
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
                <Card className="flex flex-col p-0 h-full overflow-hidden">
                  <Image
                    src={project.image ?? "/images/background.png"}
                    width={1920}
                    height={1920}
                    alt="Default background"
                    unoptimized
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
                      href={project.path ? `/projects/${project.path}` : ""}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>View Project</Button>
                    </Link>
                  </div>
                </Card>
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
                id === current - 1
                  ? "bg-muted-foreground/70"
                  : "bg-muted-foreground/20"
              }`}
            ></div>
          );
        })}
      </div>
      <div className="text-muted-foreground py-2 text-center text-xs">
        {current} of {count}
      </div>
    </div>
  );
}
