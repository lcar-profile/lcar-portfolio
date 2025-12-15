import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconButtonProps } from "../types";

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { children, size = 12, handleClick, screenReader, className, ...props },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        {...props}
        className={cn(
          `size-${size} text-foreground bg-transparent hover:bg-foreground/15 !p-2`,
          className
        )}
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
