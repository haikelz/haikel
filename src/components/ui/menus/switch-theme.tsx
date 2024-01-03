"use client";

import { Variants } from "framer-motion";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import TransitionLayout from "~components/transition-layout";
import { tw } from "~lib/helpers";

type VariantsConfigProps = {
  toTop: Variants;
  toBottom: Variants;
};

export default function SwitchTheme() {
  const { theme, setTheme } = useTheme();

  function handleClick() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <button
      className={tw(
        "rounded-md overflow-hidden",
        "p-1",
        "bg-base-5",
        "active:bg-base-4",
        "dark:bg-base-2 dark:active:bg-base-1 font-bold"
      )}
      type="button"
      aria-label="switch theme"
      onClick={handleClick}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <TransitionLayout
        key={theme}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </TransitionLayout>
    </button>
  );
}
