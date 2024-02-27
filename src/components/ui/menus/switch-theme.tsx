"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { match } from "ts-pattern";
import TransitionLayout from "~components/transition-layout";
import { tw } from "~lib/helpers";

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
        "dark:bg-base-1 font-bold"
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
        {match({ theme: theme })
          .with({ theme: "dark" }, () => <SunIcon />)
          .otherwise(() => (
            <MoonIcon />
          ))}
      </TransitionLayout>
    </button>
  );
}
