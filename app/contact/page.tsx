"use client";

import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { IconContext, IconType } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ContactItem {
  icon: IconType;
  title: string;
  link: string;
}

const contactItems = [
  {
    icon: IoMail,
    title: "Email",
    link: "mailto:laicarson.swe@gmail.com",
  },
  { icon: FaLinkedin, title: "LinkedIn", link: "http://linkedin.com/in/l-car" },
  { icon: FaGithub, title: "GitHub", link: "http://github.com/carsnl" },
];

function ContactCard({ contacts }: { contacts: ContactItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const Icon = contacts.icon;

  if (isCopied) {
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <a href={contacts.link} target="_blank" rel="noopener noreferrer">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="border-2 p-2 rounded-sm"
      >
        <div className="flex flex-row justify-between items-center">
          <IconContext value={{ size: "36px" }}>
            <Icon></Icon>
          </IconContext>
          <div className="flex flex-row gap-1.5 items-center">
            <div>{contacts.title}</div>
            <ExternalLink size={15}></ExternalLink>
          </div>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-8"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen((open) => !open);
              }}
            >
              {isOpen ? <ChevronUp></ChevronUp> : <ChevronDown></ChevronDown>}
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent
          className="flex mt-1.5 py-2 px-2 rounded-sm items-center bg-red-500 cursor-default"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <div className="m-auto">{contacts.link}</div>
          <Button
            size={"icon-sm"}
            onClick={(e) => {
              if (!isCopied) {
                e.preventDefault();
                setIsCopied(true);
                navigator.clipboard.writeText(contacts.link);
                toast("Copied to clipboard");
              }
            }}
          >
            {isCopied ? <Check size={16}></Check> : <Copy size={16}></Copy>}
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </a>
  );
}

export default function Contact() {
  return (
    <div className="flex flex-col items-center w-full">
      <h2>Contact me</h2>
      <h3>Subtitle text here</h3>
      <hr className="border-t-1 my-6 w-16" />
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {contactItems.map((c) => {
          return <ContactCard key={c.title} contacts={c}></ContactCard>;
        })}
      </div>
    </div>
  );
}
