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
import { useEffect, useRef, useState } from "react";
import Separator from "../components/separator";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const ref = useRef(false);
  const [didMount, setDidMount] = useState(false);
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
    <div className="flex flex-col w-full max-w-3xl items-center">
      <div className="pb-8">
        <h1 className="pb-4 text-2xl font-semibold text-accent">Projects</h1>
        <p>Lorem ipsum</p>
      </div>

      <Carousel
        setApi={setApi}
        className="mb-8"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {projects.map((project, id) => {
            return (
              <CarouselItem key={id} className="max-w-sm">
                <div className="flex flex-col border-1 rounded-sm h-full overflow-hidden">
                  <Image
                    src="/images/background.png"
                    width={1920}
                    height={1920}
                    alt="Default background"
                  />
                  <div className="flex flex-col p-3 gap-2 justify-between h-full">
                    <div className="flex flex-col gap-2 mb-3">
                      <div className="font-bold text-lg">{project.title}</div>
                      <div className="flex flex-row gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} label={tag}></Badge>
                        ))}
                      </div>
                      <div className="text-ellipsis">{project.subtitle}</div>
                    </div>
                    <Link className=" self-center" href={project.path ?? ""}>
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
                id === current - 1 ? "bg-accent" : "bg-muted"
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
