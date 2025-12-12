"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./toggle";
import { Menu, House, Folder, Mail, LucideIcon } from "lucide-react";
import IconButton from "./iconButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import HoverLink from "./hoverLink";
import { useState } from "react";

interface MenuItem {
  label: string;
  pathname: string;
  icon: LucideIcon;
}

const menuItems: MenuItem[] = [
  { label: "Home", pathname: "/", icon: House },
  { label: "Projects", pathname: "/projects", icon: Folder },
  { label: "Contact", pathname: "/contact", icon: Mail },
];

export default function NavBar() {
  const path = usePathname();

  return (
    <div className="w-full flex flex-row justify-between items-center px-4 md:px-8 h-16 fixed top-0 right-0 left-0 border-b-[1px] bg-background/80 backdrop-blur-lg z-10 w-screen min-w-0">
      <div className="flex flex-row gap-3 items-center">
        <div className="block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <IconButton screenReader="Toggle Menu">
                <Menu></Menu>
              </IconButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-40 bg-background border-1 rounded-sm"
              align="start"
              side="bottom"
              sideOffset={10}
              avoidCollisions
            >
              <div className="flex flex-col divide-y">
                {menuItems.map((m, i) => {
                  return (
                    <DropdownMenuItem key={i} asChild className="p-3">
                      <Link
                        href={m.pathname}
                        className="flex gap-2 items-center active:bg-foreground/10"
                      >
                        <m.icon size={20} />
                        {m.label}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Link href="/" className="font-bold text-lg">
          Lai Carson
        </Link>
      </div>
      <div className="flex flex-row">
        <ul className="flex flex-row gap-7 mr-6 items-center hidden md:flex">
          {menuItems.map((m) => {
            const isCurrentPath =
              m.pathname === "/" ? path === "/" : path.startsWith(m.pathname);
            return (
              <li key={m.pathname}>
                <HoverLink
                  href={m.pathname}
                  className={`${
                    isCurrentPath &&
                    "font-bold border-b-[1.5px] border-foreground"
                  } flex items-center gap-2 p-1`}
                >
                  <m.icon size={20} />
                  {m.label}
                </HoverLink>
              </li>
            );
          })}
        </ul>
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
}
