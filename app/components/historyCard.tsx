"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, User, Calendar } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Framework, Language } from "../types/tags";
import Badge from "./badge";
import IconButton from "./iconButton";

export interface HistoryItem {
  startDate: Date;
  endDate: Date;
  company: string;
  role: string;
  image?: string;
  skills?: (Framework | Language | string)[];
  description: string[];
}

export default function HistoryCard({
  startDate,
  endDate,
  company,
  image,
  role,
  skills,
  description,
}: HistoryItem) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-col w-full p-4 border-1 rounded-sm bg-foreground/5">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-col">
            <div className="flex flex-row gap-2 items-center">
              {image && (
                <Image
                  src={image}
                  width={60}
                  height={60}
                  alt={"logo"}
                  className="mr-2 rounded-sm"
                ></Image>
              )}
              <div className="flex flex-col">
                <div className="font-semibold text-lg">{company}</div>
                <div className="flex flex-row gap-2 items-center">
                  <User size={20}></User>
                  <div>{role}</div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Calendar size={20}></Calendar>
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
                </div>
              </div>
            </div>
            {skills && (
              <div className="flex flex-row gap-2 mt-2">
                {skills.map((s) => {
                  return <Badge key={s} label={s}></Badge>;
                })}
              </div>
            )}
          </div>
          <CollapsibleTrigger asChild>
            <IconButton screenReader="toggle">
              {isOpen ? (
                <ChevronUp size={6} className="!size-6"></ChevronUp>
              ) : (
                <ChevronDown size={6} className="!size-6"></ChevronDown>
              )}
            </IconButton>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <hr className={`border-t-1 my-4 w-full`} />
          <ul>
            {description.map((d) => {
              return <li key={d}>&#x2022; {d}</li>;
            })}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
