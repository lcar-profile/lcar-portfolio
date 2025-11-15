"use client";

import { useState, useEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const ref = useRef(false);
  const [didMount, setDidMount] = useState(false);
  const isDark = theme === "dark";

  // Prevent hydration error
  useEffect(() => {
    ref.current = true;
    setDidMount(ref.current);
  }, []);

  if (!didMount) {
    return null;
  }

  return (
    <Button
      className="bg-background/20 text-foreground"
      size={"icon-sm"}
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
    >
      {isDark ? <Sun></Sun> : <Moon></Moon>}
    </Button>
  );
}
