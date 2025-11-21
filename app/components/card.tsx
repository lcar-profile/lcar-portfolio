import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="p-4 border-1 rounded-sm bg-foreground/5">{children}</div>
  );
}
