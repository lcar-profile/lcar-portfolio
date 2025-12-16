"use client";

import Card from "@/app/components/card";
import IconButton from "@/app/components/iconButton";
import { ContactItem } from "@/app/types";
import { Check, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { IconContext } from "react-icons";
import { toast } from "sonner";

export default function ContactCard({
  icon,
  title,
  subtitle,
  link,
}: ContactItem) {
  const [isCopied, setIsCopied] = useState(false);

  if (isCopied) {
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  const content = (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-3">
        <div className="bg-foreground/20 p-3 rounded-full">
          <IconContext value={{ size: "22px" }}>{icon}</IconContext>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-1 items-center">
            <div className="font-semibold">{title}</div>
            {link && (
              <div>
                <ExternalLink size={16}></ExternalLink>
              </div>
            )}
          </div>
          <div className="text-sm text-muted-foreground">{subtitle}</div>
        </div>
      </div>
      <div>
        <IconButton
          size={5}
          screenReader="copy"
          handleClick={(e) => {
            e.preventDefault();
            if (!isCopied) {
              setIsCopied(true);
              navigator.clipboard.writeText(link ?? subtitle);
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
  );

  return (
    <Card asChild={!!link}>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </Card>
  );
}
