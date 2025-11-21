"use client";

import { useState, useEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import IconButton from "./iconButton";

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
    <IconButton
      screenReader="Toggle Light Mode Dark Mode"
      handleClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
    >
      {isDark ? <Sun></Sun> : <Moon></Moon>}
    </IconButton>
  );
}
