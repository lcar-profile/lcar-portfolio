"use client";

import { ExternalLink, Copy, Check } from "lucide-react";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { toast } from "sonner";
import { useState } from "react";
import Separator from "../components/separator";
import IconButton from "../components/iconButton";
import Card from "../components/card";
import { ContactItem } from "../types";

const contactItems: ContactItem[] = [
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
  const [isCopied, setIsCopied] = useState(false);
  const Icon = contacts.icon;

  if (isCopied) {
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  const CardContent = (
    <Card
      className={contacts.link && `hover:border-hyperlink hover:bg-primary/10`}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-3">
          <div className="bg-foreground/20 p-3 rounded-full">
            <IconContext value={{ size: "22px" }}>
              <Icon></Icon>
            </IconContext>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-1 items-center">
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
            size={5}
            screenReader="copy"
            handleClick={(e) => {
              if (!isCopied) {
                e.preventDefault();
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
    </Card>
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
    <div className="flex flex-col w-full max-w-4xl mx-auto items-center">
      <div className="flex flex-col items-center w-full">
        <h2 className="pb-4 text-2xl font-semibold text-accent">Contact me</h2>
        <h3 className="text-sm">Reach me through the following channels</h3>
        <Separator />
        <div className="flex flex-col gap-4 w-full max-w-sm">
          {contactItems.map((c) => {
            return <ContactCard key={c.title} contacts={c}></ContactCard>;
          })}
        </div>
      </div>
      <Separator></Separator>
    </div>
  );
}
