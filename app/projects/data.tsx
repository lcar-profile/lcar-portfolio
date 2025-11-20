import { ProjectProps } from "../components/projectBase";
import { Framework, Language } from "../types/tags";

export const allProjects: ProjectProps[] = [
  {
    title: "Reversi Game",
    tags: [Language.JS, Framework.REACT],
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    path: "/projects/reversi",
    about: "...",
    features: "...",
    lessons: "...",
  },
  {
    title: "NewsPortal",
    tags: [Language.JS],
    subtitle: "Lorem ipsum dolor sit amet",
    path: "/projects/newsportal",
    about: "",
    features: "",
    lessons: "",
  },
  {
    title: "eWallet Prototype",
    tags: [],
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    path: "",
    about: "",
    features: "",
    lessons: "",
  },
  {
    title: "Deep Learning",
    tags: [],
    subtitle: "Lorem ipsum dolor sit amet",
    path: "",
    about: "",
    features: "",
    lessons: "",
  },
];
