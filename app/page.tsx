import Link from "next/link";
import HistoryCard, { HistoryItem } from "./components/historyCard";
import { Button } from "@/components/ui/button";
import Separator from "./components/separator";
import { Framework, HistoryType, Language } from "./types/tags";

const workExperience: HistoryItem[] = [
  {
    type: HistoryType.WORK,
    startDate: new Date(2024, 10),
    endDate: new Date(2025, 1),
    company: "Netizen eXperience",
    description: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
    image: "/images/netizen_experience_logo.png",
    skills: [Language.TS, Framework.REACT, Framework.NEXT, Framework.TAILWIND],
    role: "Web Development Intern",
  },
  {
    type: HistoryType.WORK,
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
];

const education: HistoryItem[] = [
  {
    type: HistoryType.EDUCATION,
    startDate: new Date(2020, 9),
    endDate: new Date(2025, 10),
    company: "Monash University",
    role: "Bachelor of Software Engineering (First Class Honours)",
    description: [
      "GPA: 3.78/4.00 (CGPA: 3.93/4.00)",
      "Dean's Honour List (2022-2023): Achieved weighted average of 80% and above",
      "Monash High Achiever Award (2020-2025): Partial tuition fee waiver each semester based on academic performance",
      "Industry-Based Learning Scholarship (2023): Partial tuition fee waiver for 22-week industry placement",
    ],
  },
  {
    type: HistoryType.EDUCATION,
    startDate: new Date(2019, 0),
    endDate: new Date(2020, 5),
    company: "Taylor's College",
    role: "Cambridge A Levels",
    description: [
      "Grades: 4A*",
      "Taylor's Distinction Award (2019): 100% tuition fee waiver",
    ],
  },
  {
    type: HistoryType.EDUCATION,
    startDate: new Date(2014, 0),
    endDate: new Date(2018, 11),
    company: "SMK Bandar Utama Damansara 3",
    role: "Malaysian Education Certificate (SPM)",
    description: ["Grades: 7A+, 1A, 1B+"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-4xl items-center">
      <div className="flex flex-col items-center w-full">
        <h1 className="mb-1 mt-6 text-4xl font-bold text-accent">Lai Carson</h1>
        <p>Software Engineer</p>
        <p className="my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link href={"/contact"} className="my-2">
          <Button size="lg" variant="default">
            Contact Me
          </Button>
        </Link>
      </div>
      <Separator />
      <div className="flex flex-col items-center w-full">
        <h2 className="pb-6 text-2xl font-semibold text-accent">
          Work Experience
        </h2>
        <div className="flex flex-col w-full gap-4 mb-8">
          {workExperience.map((item) => {
            return <HistoryCard key={item.company} {...item}></HistoryCard>;
          })}
        </div>
      </div>
      <Separator />
      <div className="flex flex-col items-center w-full">
        <h2 className="pb-6 text-2xl font-semibold text-accent">Education</h2>
        <div className="flex flex-col w-full gap-4 mb-8">
          {education.map((item) => {
            return <HistoryCard key={item.company} {...item}></HistoryCard>;
          })}
        </div>
      </div>
      <Separator></Separator>
    </div>
  );
}
