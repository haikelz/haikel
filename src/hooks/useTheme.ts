"use client";

import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";

const browser: boolean = typeof window !== "undefined";
const themeAtom = atomWithStorage(
  "theme",
  browser && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
);

export function useTheme() {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    const body = document.body;

    if (!browser) return;
    body.classList.remove("light", "dark");
    body.classList.add(theme);
  }, [theme]);

  return [theme, setTheme] as const;
}
