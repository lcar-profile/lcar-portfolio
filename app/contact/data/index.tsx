import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { ContactItem } from "../../types";

export const contactItems: ContactItem[] = [
  {
    Icon: <IoMail size={24} />,
    title: "Email",
    subtitle: "laicarson.swe@gmail.com",
  },
  {
    Icon: <FaLinkedin size={24} />,
    title: "LinkedIn",
    link: "http://linkedin.com/in/laicarson-swe",
    subtitle: "linkedin.com/in/laicarson-swe",
  },
  {
    Icon: <FaGithub size={24} />,
    title: "GitHub",
    link: "http://github.com/carsnl",
    subtitle: "github.com/carsnl",
  },
];
