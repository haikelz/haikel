"use client";

import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Monitor, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { tw } from "~lib/helpers";
import { ibmPlexSans } from "~lib/utils/fonts";

import Menu from "./menu";

const themeOptionsList = [
  {
    id: 1,
    name: "Dark",
    icon: MoonIcon,
  },
  {
    id: 2,
    name: "Light",
    icon: SunIcon,
  },
  {
    id: 3,
    name: "System Theme",
    icon: Monitor,
  },
];

export default function SwitchThemeMenu() {
  const { theme, setTheme, systemTheme } = useTheme();

  return (
    <Menu
      menuIcon={
        <button
          className={tw(
            "rounded-sm",
            "p-1",
            "hover:bg-gray-200",
            "active:bg-gray-300",
            "dark:hover:bg-base-2 dark:active:bg-base-1 font-bold"
          )}
          type="button"
          aria-label="switch theme"
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      }
      list={themeOptionsList.map((item) => {
        const Icon = item.icon;
        return (
          <DropdownMenuItem
            key={item.id}
            className={tw(
              "flex items-center justify-start",
              "space-x-2 rounded-md p-2",
              "cursor-pointer font-semibold outline-none transition-all",
              "data-[highlighted]:bg-red data-[highlighted]:text-gray-100",
              "dark:data-[highlighted]:bg-blue-500"
            )}
            onClick={() =>
              setTheme(
                item.name === "Dark"
                  ? "dark"
                  : item.name === "Light"
                  ? "light"
                  : systemTheme === "dark"
                  ? "dark"
                  : "light"
              )
            }
          >
            <Icon size={22} />
            <span className={ibmPlexSans.className}>{item.name}</span>
          </DropdownMenuItem>
        );
      })}
      contentClassName="-translate-x-14 md:translate-x-14 md:-translate-y-10"
    />
  );
}
