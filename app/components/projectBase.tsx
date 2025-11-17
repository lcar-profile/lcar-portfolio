import Tag from "@/app/components/tag";
import { Framework, Language } from "@/app/types/tags";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface ProjectProps {
  title: string;
  subtitle: string;
  tags: (Language | Framework)[];
  path: string;
  github?: string;
  live?: string;
  about: string;
  features: string;
  lessons: string;
}

export default function ProjectBase({
  title,
  subtitle,
  tags,
  path,
  github,
  live,
  about,
  features,
  lessons,
}: ProjectProps) {
  return (
    <div className="flex flex-col w-full max-w-3xl">
      <div className="flex flex-col pl-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="py-2">{subtitle}</p>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2">
            {tags.map((t) => {
              return <Tag key={t} label={t}></Tag>;
            })}
          </div>
          <div className="flex flex-row gap-2">
            {github ?? <Button>GitHub</Button>}
            {live ?? <Button>Live</Button>}
          </div>
        </div>
        <div className="relative w-full h-128">
          <Image
            src="/images/background.png"
            fill
            alt="Default background"
            className="py-4 object-cover"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <div className="font-semibold text-xl">About</div>
            <div>{about}</div>
          </div>
          <div>
            <div className="font-semibold text-xl">Features</div>
            <div>{features}</div>
          </div>
          <div>
            <div className="font-semibold text-xl">Lessons</div>
            <div>{lessons}</div>
          </div>
        </div>
        <hr className="border-t-1 my-6 w-full" />
      </div>
    </div>
  );
}

// Tech stack
// About the project - what it does
// Features and outcomes (quantify if possible)
// Architecture and code highlights
// Lessons learnt
// Links
