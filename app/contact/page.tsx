"use client";

import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { IconContext, IconType } from "react-icons";
import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
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
import Separator from "../components/separator";
import IconButton from "../components/iconButton";

interface ContactItem {
  icon: IconType;
  title: string;
  subtitle: string;
  link?: string;
}

const contactItems: ContactItem[] = [
  { icon: FaPhoneAlt, title: "Phone", subtitle: "+60 16-212 5882" },
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

function ContactCard({ contacts }: { contacts: ContactItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const Icon = contacts.icon;

  if (isCopied) {
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  const CardContent = (
    <div className="p-4 border-1 rounded-sm bg-foreground/5">
      {/* TODO: Refactor card into its own component */}
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-3">
          <div className="bg-primary/30 p-3 rounded-full">
            <IconContext value={{ size: "22px" }}>
              <Icon></Icon>
            </IconContext>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-1.5 items-center">
              <div className="font-semibold">{contacts.title}</div>
              {contacts.link && (
                <div>
                  <ExternalLink size={16}></ExternalLink>
                </div>
              )}
            </div>
            <div className="text-sm text-muted-foreground">
              {contacts.subtitle}
            </div>
          </div>
        </div>
        <div>
          <IconButton
            screenReader="copy"
            handleClick={() => {
              if (!isCopied) {
                setIsCopied(true);
                navigator.clipboard.writeText(
                  contacts.link ?? contacts.subtitle
                );
                toast("Copied to clipboard");
              }
            }}
          >
            {!isCopied ? (
              <Copy className="!size-5"></Copy>
            ) : (
              <Check className="!size-5"></Check>
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );

  return contacts.link ? (
    <a href={contacts.link} target="_blank" rel="noopener noreferrer">
      {CardContent}
    </a>
  ) : (
    CardContent
  );
}

export default function Contact() {
  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto items-center">
      <div className="flex flex-col items-center w-full">
        <h2 className="pb-4 text-2xl font-semibold text-accent">Contact me</h2>
        <h3>Subtitle text here</h3>
        <Separator />
        <div className="flex flex-col gap-4 w-full max-w-sm">
          {contactItems.map((c) => {
            return <ContactCard key={c.title} contacts={c}></ContactCard>;
          })}
        </div>
      </div>
      {/* <div className="flex flex-row h-full w-full bg-white text-black">
        <div className="flex flex-col flex-1">
          <h2 className="pb-1 text-2xl font-semibold text-accent">
            Contact me
          </h2>
          <h3>Subtitle text here</h3>
        </div>
        <div className="flex flex-col flex-1 gap-4 w-full max-w-sm">
          {contactItems.map((c) => {
            return <ContactCard key={c.title} contacts={c}></ContactCard>;
          })}
        </div>
      </div> */}
      <Separator></Separator>
    </div>
  );
}
