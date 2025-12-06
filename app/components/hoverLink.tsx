"use client";

import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

interface HoverLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

export default function HoverLink({
  className,
  children,
  ...props
}: HoverLinkProps) {
  return (
    <Link {...props} className={cn("hover:text-(--hyperlink)", className)}>
      {children}
    </Link>
  );
}
