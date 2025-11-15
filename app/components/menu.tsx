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
    <div className="w-full flex flex-row justify-between px-10 py-6 bg-red-500">
      <div>laicarson.com</div>
      <ul className="flex flex-row gap-10 items-center">
        {menuItems.map((item) => {
          const isCurrentPath = path === item.pathname;
          return (
            <li key={item.pathname}>
              <Link
                href={item.pathname}
                className={isCurrentPath ? "underline" : ""}
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
