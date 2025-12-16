import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { ContactItem } from "../types";

export const contactItems: ContactItem[] = [
  {
    icon: IoMail,
    title: "Email",
    subtitle: "laicarson.swe@gmail.com",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    link: "http://linkedin.com/in/l-car",
    subtitle: "linkedin.com/in/l-car",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    link: "http://github.com/carsnl",
    subtitle: "github.com/carsnl",
  },
];
