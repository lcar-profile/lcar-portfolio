import Link from "next/link";
import HistoryCard, { HistoryItem } from "./components/historyCard";
import { Button } from "@/components/ui/button";
import Separator from "./components/separator";
import { Framework, Language } from "./types/tags";

const workExperience: HistoryItem[] = [
  {
    startDate: new Date(2024, 10),
    endDate: new Date(2025, 1),
    company: "Netizen eXperience",
    description: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
    image: "/images/netizen_experience_logo.png",
    skills: [Language.TS, Framework.REACT, Framework.NEXT],
    role: "Web Development Intern",
  },
  {
    startDate: new Date(2023, 6),
    endDate: new Date(2023, 11),
    company: "TIME",
    description: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
    image: "/images/time_dotcom_berhad_logo.jpg",
    skills: [Language.PHP, Language.BASH, "Automation"],
    role: "Operations Support Systems Intern",
  },
  {
    startDate: new Date(2021, 3),
    endDate: new Date(2022, 1),
    company: "Raja Eleena Siew Ang & Associates",
    description: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
    image: "/images/bar_logo.svg",
    role: "Clerk",
  },
];

const education: HistoryItem[] = [
  {
    startDate: new Date(2020, 9),
    endDate: new Date(2025, 10),
    company: "Monash University",
    role: "Bachelor of Software Engineering",
    description: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
  },
  {
    startDate: new Date(2019, 0),
    endDate: new Date(2020, 5),
    company: "Taylor's College",
    role: "Cambridge A Levels",
    description: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
  },
  {
    startDate: new Date(2014, 0),
    endDate: new Date(2018, 11),
    company: "SMK Bandar Utama Damansara 3",
    role: "Malaysian Education Certificate (SPM)",
    description: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col items-center w-full max-w-3xl">
        <h1 className="mb-1 mt-6 text-4xl font-bold text-accent">Lai Carson</h1>
        <p>Software Engineer</p>
        <p className="my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link href={"/contact"} className="my-2">
          <Button size="lg">Contact Me</Button>
        </Link>
      </div>
      <Separator />
      <div className="flex flex-col items-center w-full max-w-3xl">
        <h2 className="pb-6 text-2xl font-semibold text-accent">
          Work Experience
        </h2>
        <div className="flex flex-col w-full gap-4 mb-8">
          {workExperience.map((item) => {
            return <HistoryCard key={item.company} {...item}></HistoryCard>;
          })}
        </div>
        <Link href={"/resume.pdf"} target="_blank" rel="noopener noreferrer">
          <Button size="lg">View Resume</Button>
        </Link>
      </div>
      <Separator />
      <div className="flex flex-col items-center w-full max-w-3xl">
        <h2 className="pb-6 text-2xl font-semibold text-accent">Education</h2>
        <div className="flex flex-col w-full gap-4 mb-8">
          {education.map((item) => {
            return <HistoryCard key={item.company} {...item}></HistoryCard>;
          })}
        </div>
        <Link
          href={"/transcript.pdf"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg">View Academic Transcript</Button>
        </Link>
      </div>
      <Separator></Separator>
    </div>
  );
}
