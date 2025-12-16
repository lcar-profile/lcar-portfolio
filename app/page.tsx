import HistoryCard from "./components/historyCard";
import Separator from "./components/separator";
import Editor from "./components/editor";
import { editorText, education, navBarItems, workExperience } from "./data";
import { Metadata } from "next";
import HoverLink from "./components/hoverLink";
import { ArrowRight } from "lucide-react";
import { Pathname } from "./types";

export const metadata: Metadata = {
  title: "Lai Carson",
  description: "Home",
};

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-4xl items-center">
      <div className="flex flex-col items-center w-full">
        <h1 className="mb-1 mt-6 text-5xl font-bold text-accent">Lai Carson</h1>
        <p className="text-xl">Software Engineer</p>
        <div className="flex flex-col w-full mt-10 gap-6 text-center">
          <Editor text={editorText}></Editor>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col items-center w-full">
        <h2 className="pb-6 text-2xl font-semibold text-accent">
          Work Experience
        </h2>
        <div className="flex flex-col w-full gap-4">
          {workExperience.map((item) => {
            return <HistoryCard key={item.company} {...item}></HistoryCard>;
          })}
        </div>
      </div>
      <Separator />
      <div className="flex flex-col items-center w-full">
        <h2 className="pb-6 text-2xl font-semibold text-accent">Education</h2>
        <div className="flex flex-col w-full gap-4">
          {education.map((item) => {
            return <HistoryCard key={item.company} {...item}></HistoryCard>;
          })}
        </div>
      </div>
      <Separator />
      <div className="flex flex-col gap-6 items-center w-full mb-8">
        <div className="text-muted-foreground">Explore more</div>
        <div className="flex flex-col w-full items-end">
          {navBarItems.map((n) => {
            if (n.pathname !== Pathname.HOME) {
              return (
                <HoverLink
                  key={n.pathname}
                  href={n.pathname}
                  className="flex flex-col py-1"
                >
                  <div className="flex items-center gap-1">
                    {n.label}
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </div>
                </HoverLink>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
