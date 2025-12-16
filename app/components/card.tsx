import { cn } from "@/lib/utils";
import { CardProps } from "../types";
import { Slot } from "@radix-ui/react-slot";

export default function Card({
  asChild,
  className,
  children,
  ...props
}: CardProps) {
  const Comp = asChild ? Slot : "div";
  const isClickable = !!props.onClick || asChild;

  return (
    <Comp
      className={cn(
        "p-4 border-1 rounded-sm bg-foreground/3 backdrop-blur-lg shadow-xs",
        isClickable &&
          "hover:cursor-pointer hover:border-border-accent hover:bg-foreground/6",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
