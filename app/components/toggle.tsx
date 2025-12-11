"use client";

import { useState, useEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import IconButton from "./iconButton";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const ref = useRef(false);
  const [didMount, setDidMount] = useState(false);

  // Prevent hydration error
  useEffect(() => {
    ref.current = true;
    setDidMount(ref.current);
  }, []);

  if (!didMount) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

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
