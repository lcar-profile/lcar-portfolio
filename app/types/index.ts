import { LucideIcon } from "lucide-react";
import { LinkProps } from "next/link";
import {
  ComponentPropsWithoutRef,
  ReactNode,
  MouseEvent,
  ComponentProps,
} from "react";

export enum Language {
  PYTHON = "Python",
  JS = "JavaScript",
  TS = "TypeScript",
  JAVA = "Java",
  PHP = "PHP",
  DART = "Dart",
  KOTLIN = "Kotlin",
  BASH = "Bash",
  HTML = "HTML",
  CSS = "CSS",
}

export enum Framework {
  REACT = "React",
  NEXT = "Next.js",
  TAILWIND = "Tailwind CSS",
  NODE = "Node.js",
  FLUTTER = "Flutter",
  COMPOSE = "Jetpack Compose",
}

export enum Skill {
  SCRIPTING = "Scripting",
  WEB = "Web",
  FRONTEND = "Front-end",
}

export enum HistoryType {
  WORK = "work",
  EDUCATION = "education",
}

export interface CardProps extends ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
  children: ReactNode;
}

export interface EditorProps {
  text?: string;
}

export interface EditorButtonProps {
  title: string;
  Icon: LucideIcon;
}

export interface HistoryItem {
  type: HistoryType;
  startDate: Date;
  endDate: Date;
  company: string;
  role: string;
  image?: string;
  skills?: (Framework | Language | string)[];
  description: string[];
}

export interface HoverLinkProps
  extends LinkProps,
    Omit<ComponentProps<"a">, "href"> {
  asChild?: boolean;
  children: ReactNode;
}

export interface NavBarItem {
  label: string;
  pathname: string;
  icon: LucideIcon;
}

export interface ContactItem {
  icon: ReactNode;
  title: string;
  subtitle: string;
  link?: string;
}

export interface ProjectProps {
  title: string;
  subtitle: string;
  tags: (Language | Framework | Skill)[];
  image?: string;
  path: string;
  github?: string;
  live?: string;
  body: ReactNode;
}

export enum ProjectParams {
  REVERSI = "reversi",
  NEWSPORTAL = "newsportal",
  EWALLET = "ewallet",
  NUTRITION = "nutrition-assitant",
  POKEMON = "pokemon-roguelike",
}

export interface IconButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  size?: number;
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  screenReader: string;
}

export interface ProjectCarouselProps {
  projects: ProjectProps[];
}
