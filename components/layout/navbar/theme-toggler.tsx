"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function ThemeToggle({ className }: { className: string }) {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <input
      aria-label="themeToggler"
      type="checkbox"
      onChange={() => setTheme(isLight ? "dark" : "light")}
      checked={isLight}
      className={cn("toggle", className)}
    />
  );
}
