"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { HoverLinkProps } from "../types";

export default function HoverLink({
  className,
  children,
  ...props
}: HoverLinkProps) {
  return (
    <Link {...props} className={cn("hover:text-hyperlink", className)}>
      {children}
    </Link>
  );
}
