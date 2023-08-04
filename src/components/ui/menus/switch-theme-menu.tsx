"use client";

import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { IconDeviceDesktop, IconMoon, IconSunHigh } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { cxm } from "~lib/helpers";
import { ibmPlexSans } from "~lib/utils/fonts";

import Menu from "./menu";

const themeOptionsList = [
  {
    id: 1,
    name: "Dark",
    icon: IconMoon,
  },
  {
    id: 2,
    name: "Light",
    icon: IconSunHigh,
  },
  {
    id: 3,
    name: "System Theme",
    icon: IconDeviceDesktop,
  },
];

export default function SwitchThemeMenu() {
  const { theme, setTheme, systemTheme } = useTheme();

  return (
    <Menu
      menuIcon={
        <button
          className={cxm(
            "overflow-hidden rounded-sm",
            "transition-all p-1",
            "hover:bg-gray-200",
            "active:bg-gray-300",
            "dark:bg-base-2"
          )}
          type="button"
          aria-label="switch theme"
        >
          {theme === "dark" ? <IconSunHigh size={22} /> : <IconMoon size={22} />}
        </button>
      }
      list={themeOptionsList.map((item) => {
        const Icon = item.icon;
        return (
          <DropdownMenuItem
            key={item.id}
            className={cxm(
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
      contentClassName="lg:-translate-x-20 -translate-x-5"
    />
  );
}
