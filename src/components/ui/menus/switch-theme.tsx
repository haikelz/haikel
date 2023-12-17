"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { tw } from "~lib/helpers";

export default function SwitchTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={tw(
        "rounded-md",
        "p-1",
        "bg-base-5",
        "active:bg-base-4",
        "dark:bg-base-2 dark:active:bg-base-1 font-bold"
      )}
      type="button"
      aria-label="switch theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
