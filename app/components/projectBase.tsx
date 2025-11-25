import Badge from "@/app/components/badge";
import { Framework, Language } from "@/app/types/tags";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Separator from "./separator";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Globe, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";

export interface ProjectProps {
  title: string;
  subtitle: string;
  tags: (Language | Framework)[];
  path: string;
  github?: string;
  live?: string;
  body: string;
  prev?: ProjectProps | null;
  next?: ProjectProps | null;
}

export default function ProjectBase({
  title,
  subtitle,
  tags,
  path,
  github,
  live,
  body,
  prev,
  next,
}: ProjectProps) {
  return (
    <div className="flex flex-col w-full max-w-4xl">
      <div className="flex flex-col mx-auto px-4 items-center">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-3xl font-bold text-accent">{title}</h1>
          <p className="py-2">{subtitle}</p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
            <div className="flex flex-row gap-2">
              {tags.map((t) => {
                return <Badge key={t} label={t}></Badge>;
              })}
            </div>
            <div className="flex flex-row gap-2">
              {github && (
                <Button className="flex flex-row gap-1.5">
                  <FaGithub></FaGithub>
                  <Link href={github}>GitHub</Link>
                  <ExternalLink></ExternalLink>
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
        <div className="flex flex-row w-full items-center justify-between">
          <div>
            {prev && (
              <div className="flex flex-row items-center gap-1">
                <ArrowLeft size={12}></ArrowLeft>
                <Link href={prev.path} className="self-start text-sm">
                  {prev.title}
                </Link>
              </div>
            )}
          </div>
          <div>
            {next && (
              <div className="flex flex-row items-center gap-1">
                <Link href={next.path} className="self-end text-sm">
                  {next.title}
                </Link>
                <ArrowRight size={12}></ArrowRight>
              </div>
            )}
          </div>
        </div>
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
