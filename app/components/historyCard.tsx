"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";
import React from "react";
import Image from "next/image";

export interface HistoryItem {
  startDate: Date;
  endDate: Date;
  company: string;
  role: string;
  image: string;
  description: string[];
}

export default function HistoryCard({
  startDate,
  endDate,
  company,
  image,
  role,
  description,
}: HistoryItem) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-row gap-2">
          <Image src={image} width={80} height={80} alt={"logo"}></Image>
          <div className="flex flex-col">
            <span>{company}</span>
            <div className="flex flex-row">
              <span>
                {startDate.toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span className="px-2">-</span>
              <span>
                {endDate.toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
            <div>{role}</div>
          </div>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8">
            {isOpen ? <ChevronUp></ChevronUp> : <ChevronDown></ChevronDown>}
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <hr className="border-t-1 my-6 w-full" />
        <ul>
          {description.map((d) => {
            return <li key={d}>&#x2022; {d}</li>;
          })}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
