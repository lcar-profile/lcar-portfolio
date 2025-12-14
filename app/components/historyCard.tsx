"use client";

import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import {
  ChevronUp,
  ChevronDown,
  User,
  GraduationCap,
  Calendar,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import { Framework, HistoryType, Language } from "../types/tags";
import Badge from "./badge";
import Card from "./card";

export interface HistoryItem {
  type: HistoryType;
  startDate: Date;
  endDate: Date;
  company: string;
  role: string;
  image?: string;
  skills?: (Framework | Language | string)[];
  description: string[];
}

export default function HistoryCard({
  type,
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
    <Card className="hover:cursor-pointer hover:border-border-accent hover:bg-foreground/6">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full"
      >
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-col">
            <div className="flex flex-row gap-2 items-center text-sm">
              {image && (
                <div className="mr-2 w-[60px] h-[60px] relative hidden md:block">
                  <Image
                    src={image}
                    width={60}
                    height={60}
                    alt={"logo"}
                    className="rounded-sm object-contain"
                    unoptimized
                  ></Image>
                </div>
              )}
              <div className="flex flex-col">
                <div className="font-semibold text-lg mb-1">{company}</div>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row gap-2 items-center text-muted-foreground text-sm">
                    <div className="shrink-0">
                      {type == HistoryType.WORK ? (
                        <User size={18} />
                      ) : (
                        <GraduationCap size={18} />
                      )}
                    </div>
                    <div>{role}</div>
                  </div>
                  <div className="flex flex-row gap-2 items-center text-muted-foreground">
                    <Calendar size={18} className="shrink-0"></Calendar>
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
            </div>
            {skills && (
              <div className="flex flex-row gap-2 mt-2 flex-wrap">
                {skills.map((s) => {
                  return <Badge key={s} label={s}></Badge>;
                })}
              </div>
            )}
          </div>
          <div className="flex-0">
            {isOpen ? (
              <ChevronUp size={20}></ChevronUp>
            ) : (
              <ChevronDown size={20}></ChevronDown>
            )}
          </div>
        </div>
        <CollapsibleContent
          className={
            "data-[state=open]:animate-[slideDown_50ms_ease-out] data-[state=closed]:animate-[slideUp_50ms_ease-out]"
          }
        >
          <hr className={`border-t-1 my-4 w-full`} />
          <ul className="list-disc list-outside ml-4">
            {description.map((d) => {
              return (
                <li key={d} className="mt-4">
                  {d}
                </li>
              );
            })}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
