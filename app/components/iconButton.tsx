import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  handleClick?: () => void;
  screenReader: string;
}

export default function IconButton({
  children,
  handleClick,
  screenReader,
}: IconButtonProps) {
  return (
    <Button
      className="size-12 bg-transparent hover:bg-primary/50"
      onClick={handleClick}
    >
      {children}
      <span className="sr-only">{screenReader}</span>
    </Button>
  );
}
