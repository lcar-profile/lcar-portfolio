"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./toggle";

interface MenuItem {
  label: string;
  pathname: string;
}

const menuItems: MenuItem[] = [
  { label: "Home", pathname: "/" },
  { label: "Projects", pathname: "/projects" },
  { label: "Contact", pathname: "/contact" },
];

export default function Menu() {
  const path = usePathname();

  return (
    <div className="w-full flex flex-row justify-between items-center px-10 h-16 fixed top-0 right-0 left-0 border-b-[1px] bg-background/80 backdrop-blur-lg">
      <Link href="/" className="font-bold text-lg">
        Lai Carson
      </Link>
      <ul className="flex flex-row gap-7 items-center">
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
  );
}
