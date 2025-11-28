import { Framework, Language } from "../types/tags";

export interface ProjectProps {
  title: string;
  subtitle: string;
  tags: (Language | Framework | string)[];
  image?: string;
  path: string;
  github?: string;
  live?: string;
  body: string;
}

export const allProjects: ProjectProps[] = [
  {
    title: "Reversi Game",
    tags: [Language.TS, Framework.REACT, Language.HTML, Language.CSS],
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    image: "/images/reversi_thumbnail.jpg",
    path: "/projects/reversi",
    github: "https://github.com/lcar-showcase/lcar-game-demo",
    live: "https://lcar-showcase.github.io/lcar-game-demo/",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "NewsPortal",
    tags: [Language.JS, Language.HTML, Language.CSS, Framework.NODE],
    subtitle: "Lorem ipsum dolor sit amet",
    image: "/images/newsportal_thumbnail.jpg",
    path: "/projects/newsportal",
    github: "https://github.com/carsnl/NewsPortal",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "E-Wallet Prototype",
    tags: [Language.DART, Framework.FLUTTER],
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "/images/ewallet_thumbnail.jpg",
    path: "/projects/ewallet",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Nutrition Assistant",
    tags: [Language.KOTLIN, Framework.COMPOSE],
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "/images/nutricoach_thumbnail.jpg",
    path: "/projects/nutrition-assistant",
    github: "https://github.com/carsnl/NutritionAssistant",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Pokemon Roguelike",
    tags: [Language.JAVA],
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "/images/pokemon_thumbnail.jpg",
    path: "/projects/pokemon-roguelike",
    github: "https://github.com/carsnl/RoguelikePokemon",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
