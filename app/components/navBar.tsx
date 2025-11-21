"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./toggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import IconButton from "./iconButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

interface MenuItem {
  label: string;
  pathname: string;
}

const menuItems: MenuItem[] = [
  { label: "Home", pathname: "/" },
  { label: "Projects", pathname: "/projects" },
  { label: "Contact", pathname: "/contact" },
];

export default function NavBar() {
  const path = usePathname();

  return (
    <div className="w-full flex flex-row justify-between items-center px-8 h-16 fixed top-0 right-0 left-0 border-b-[1px] bg-background/80 backdrop-blur-lg z-10 w-screen min-w-0">
      <Link href="/" className="font-bold text-lg">
        Lai Carson
      </Link>
      <div className="flex flex-row">
        <div className="block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <IconButton screenReader="Toggle Menu">
                <Menu></Menu>
              </IconButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-40 bg-background border-1 rounded-sm p-2"
              align="end"
            >
              <div className="flex flex-col gap-2">
                {menuItems.map((m, i) => {
                  return (
                    <DropdownMenuItem key={i}>
                      <Link href={m.pathname}>{m.label}</Link>
                    </DropdownMenuItem>
                  );
                })}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <ul className="flex flex-row gap-7 items-center hidden md:flex">
          {menuItems.map((item) => {
            const isCurrentPath =
              item.pathname === "/"
                ? path === "/"
                : path.startsWith(item.pathname);
            return (
              <li key={item.pathname}>
                <Link
                  href={item.pathname}
                  className={`${
                    isCurrentPath
                      ? "font-bold underline underline-offset-4"
                      : "hover:bg-primary/30"
                  } px-3 py-2 rounded-sm`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <ModeToggle></ModeToggle>
        </ul>
      </div>
    </div>
  );
}
