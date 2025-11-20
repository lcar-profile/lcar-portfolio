import Badge from "@/app/components/badge";
import { Framework, Language } from "@/app/types/tags";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Separator from "./separator";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Globe, ExternalLink } from "lucide-react";

export interface ProjectProps {
  title: string;
  subtitle: string;
  tags: (Language | Framework)[];
  path: string;
  github?: string;
  live?: string;
  body: string;
}

export default function ProjectBase({
  title,
  subtitle,
  tags,
  path,
  github,
  live,
  body,
}: ProjectProps) {
  return (
    <div className="flex flex-col w-full max-w-3xl">
      <div className="flex flex-col mx-auto px-4 items-center">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-3xl font-bold text-accent">{title}</h1>
          <p className="py-2">{subtitle}</p>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2">
              {tags.map((t) => {
                return <Badge key={t} label={t}></Badge>;
              })}
            </div>
            <div className="flex flex-row gap-2 self-center">
              {github && (
                <Button className="flex flex-row gap-1.5">
                  <FaGithub></FaGithub>
                  <Link href={github}>GitHub</Link>
                  <ExternalLink size={2}></ExternalLink>
                </Button>
              )}
              {live && (
                <Button className="flex flex-row gap-1.5">
                  <Globe></Globe>
                  <Link href={live}>Live</Link>
                  <ExternalLink></ExternalLink>
                </Button>
              )}
            </div>
          </div>
        </div>
        <Separator></Separator>
        <div className="flex flex-col gap-5">{body}</div>
        <Separator />
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
