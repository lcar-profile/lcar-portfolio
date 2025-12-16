import Separator from "../components/separator";
import ContactCard from "./components/contactCard";
import { contactItems } from "./data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lai Carson | Contact",
  description: "Get in touch with me",
};

export default function Contact() {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto items-center">
      <div className="flex flex-col items-center w-full">
        <h2 className="pb-4 text-2xl font-semibold text-accent">Contact</h2>
        <h3 className="text-sm">Get in touch with me</h3>
        <Separator />
        <div className="flex flex-col gap-4 w-full max-w-sm">
          {contactItems.map((c) => {
            return <ContactCard key={c.title} {...c}></ContactCard>;
          })}
        </div>
      </div>
    </div>
  );
}
