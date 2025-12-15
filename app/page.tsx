import HistoryCard from "./components/historyCard";
import Separator from "./components/separator";
import Editor from "./components/editor";
import { editorText, education, workExperience } from "./data";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-4xl items-center">
      <div className="flex flex-col items-center w-full">
        <h1 className="mb-1 mt-6 text-5xl font-bold text-accent">Lai Carson</h1>
        <p className="text-muted-foreground text-xl">Software Engineer</p>
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
      <Separator></Separator>
    </div>
  );
}
