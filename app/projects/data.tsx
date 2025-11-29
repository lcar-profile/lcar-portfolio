import { ReactNode } from "react";
import { Framework, Language } from "../types/tags";

export interface ProjectProps {
  title: string;
  subtitle: string;
  tags: (Language | Framework | string)[];
  image?: string;
  path: string;
  github?: string;
  live?: string;
  body: ReactNode;
}

export const allProjects: ProjectProps[] = [
  {
    title: "Reversi Game",
    tags: [Language.TS, Framework.REACT, Language.HTML, Language.CSS],
    subtitle: "A web-based implementation of the popular Reversi board game",
    image: "/images/reversi_thumbnail.jpg",
    path: "/projects/reversi",
    github: "https://github.com/lcar-showcase/lcar-rg",
    live: "http://lcar-showcase.github.io/lcar-rg/",
    body: (
      <>
        <p>
          This Reversi game features a single-player mode, where users play
          against a computer opponent. It previously supported loading saved
          games, but this feature is temporarily disabled.
        </p>
        <p>
          This project was developed during my previous internship as part of an
          onboarding module, with guidance from an experienced front-end
          developer, to prepare me for internal company work.
        </p>
        <p>
          The main goal of the project was to improve my front-end web
          development skills by working with languages, frameworks, and tools
          like TypeScript, React, and Node Package Manager (npm). I also learned
          important front-end development concepts such as:
        </p>
        <ul className="list-disc pl-5">
          <li>State management</li>
          <li>Client-side routing</li>
          <li>Forms and input validation</li>
          <li>Working with REST APIs</li>
          <li>Implementing designs from high-fidelity prototypes</li>
        </ul>
        <p>
          User experience played an important role in driving the design
          decisions of this project. Features such as turn indicators and valid
          move highlights were added to make gameplay more intuitive than the
          physical board game - helping users easily keep track of the game
          state. Some accessibility concerns like responsive layouts and screen
          reader support were also implemented, according to the Web Content
          Accessibility Guidelines (WCAG).
        </p>
      </>
    ),
  },
  {
    title: "NewsPortal",
    tags: [Language.JS, Language.HTML, Language.CSS, Framework.NODE],
    subtitle: "Lorem ipsum dolor sit amet",
    image: "/images/newsportal_thumbnail.jpg",
    path: "/projects/newsportal",
    github: "https://github.com/carsnl/NewsPortal",
    body: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <ul className="list-disc pl-5">
          <li>Ut enim ad minim veniam</li>
          <li>quis nostrud exercitation ullamco laboris</li>
          <li>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur
          </li>
        </ul>
        <p>Excepteur sint occaecat cupidatat non proident.</p>
      </>
    ),
  },
  {
    title: "E-Wallet Prototype",
    tags: [Language.DART, Framework.FLUTTER],
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "/images/ewallet_thumbnail.jpg",
    path: "/projects/ewallet",
    body: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <ul className="list-disc pl-5">
          <li>Ut enim ad minim veniam</li>
          <li>quis nostrud exercitation ullamco laboris</li>
          <li>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur
          </li>
        </ul>
        <p>Excepteur sint occaecat cupidatat non proident.</p>
      </>
    ),
  },
  {
    title: "Nutrition Assistant",
    tags: [Language.KOTLIN, Framework.COMPOSE],
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "/images/nutricoach_thumbnail.jpg",
    path: "/projects/nutrition-assistant",
    github: "https://github.com/carsnl/NutritionAssistant",
    body: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <ul className="list-disc pl-5">
          <li>Ut enim ad minim veniam</li>
          <li>quis nostrud exercitation ullamco laboris</li>
          <li>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur
          </li>
        </ul>
        <p>Excepteur sint occaecat cupidatat non proident.</p>
      </>
    ),
  },
  {
    title: "Pokemon Roguelike",
    tags: [Language.JAVA],
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "/images/pokemon_thumbnail.jpg",
    path: "/projects/pokemon-roguelike",
    github: "https://github.com/carsnl/RoguelikePokemon",
    body: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <ul className="list-disc pl-5">
          <li>Ut enim ad minim veniam</li>
          <li>quis nostrud exercitation ullamco laboris</li>
          <li>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur
          </li>
        </ul>
        <p>Excepteur sint occaecat cupidatat non proident.</p>
      </>
    ),
  },
];
