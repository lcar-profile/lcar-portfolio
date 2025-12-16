"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { HoverLinkProps } from "../types";
import { Slot } from "@radix-ui/react-slot";

export default function HoverLink({
  asChild,
  className,
  children,
  ...props
}: HoverLinkProps) {
  const Comp = asChild ? Slot : Link;

  return (
    <Comp
      {...props}
      className={cn(
        "hover:text-hyperlink underline decoration-1 decoration-dotted underline-offset-4",
        className
      )}
    >
      {children}
    </Comp>
  );
}
