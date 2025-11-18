import Link from "next/link";
import HistoryCard, { HistoryItem } from "./components/historyCard";
import { Button } from "@/components/ui/button";

const history: HistoryItem[] = [
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
    role: "Operations Support Systems Intern",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col items-center w-full max-w-3xl">
        <h1 className="text-4xl font-bold">Lai Carson</h1>
        <p>Software Engineer</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex flex-row gap-4">
          <Link href={"/resume.pdf"} target="_blank" rel="noopener noreferrer">
            <Button>View Resume</Button>
          </Link>
          <Link href={"/contact"}>
            <Button>Contact Me</Button>
          </Link>
        </div>
      </div>
      <hr className="border-t-1 my-6 w-32" />
      <div className="flex flex-col items-center w-full max-w-3xl">
        <h2 className="pb-6 text-xl font-semibold">Work Experience</h2>
        {history.map((item) => {
          return (
            <div
              key={item.company}
              className="flex flex-row w-full mb-8 px-4 py-2 border-2"
            >
              <HistoryCard {...item}></HistoryCard>
            </div>
          );
        })}
      </div>
      <hr className="border-t-1 my-6 w-32" />
      <div className="flex flex-col items-center w-full max-w-3xl">
        <h2 className="pb-6 text-xl font-semibold">Education</h2>
        <Link
          href={"/transcript.pdf"}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Academic Transcript
        </Link>
      </div>
    </div>
  );
}
