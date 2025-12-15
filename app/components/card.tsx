import { cn } from "@/lib/utils";
import { CardProps } from "../types";

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "p-4 border-1 rounded-sm bg-foreground/3 backdrop-blur-lg shadow-xs",
        className
      )}
    >
      {children}
    </div>
  );
}
