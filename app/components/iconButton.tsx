import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  handleClick?: () => void;
  screenReader: string;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, handleClick, screenReader, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        {...props}
        className="size-12 bg-transparent hover:bg-primary/50"
        {...(handleClick && { onClick: handleClick })}
      >
        {children}
        <span className="sr-only">{screenReader}</span>
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
