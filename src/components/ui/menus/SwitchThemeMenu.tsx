"use client";

import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useTheme } from "next-themes";
import { cxm } from "~lib/helpers";
import { spaceGrotesk } from "~lib/utils/fonts";
import { DesktopIcon, MoonIcon, SunIcon } from "../svg";
import Menu from "./Menu";

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
    icon: DesktopIcon,
  },
];

export default function SwitchThemeMenu() {
  const { theme, setTheme, systemTheme } = useTheme();

  return (
    <Menu
      menuIcon={
        <button className="overflow-hidden" type="button" aria-label="switch theme">
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              key="sun icon"
              className="icon switch-theme-nav icon-tabler icon-tabler-sun-high"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path>
              <path d="M6.343 17.657l-1.414 1.414"></path>
              <path d="M6.343 6.343l-1.414 -1.414"></path>
              <path d="M17.657 6.343l1.414 -1.414"></path>
              <path d="M17.657 17.657l1.414 1.414"></path>
              <path d="M4 12h-2"></path>
              <path d="M12 4v-2"></path>
              <path d="M20 12h2"></path>
              <path d="M12 20v2"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              key="moon icon"
              className="icon switch-theme-nav icon-tabler icon-tabler-moon"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
            </svg>
          )}
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
            <Icon className="h-6 w-6" />
            <span className={spaceGrotesk.className}>{item.name}</span>
          </DropdownMenuItem>
        );
      })}
      contentClassName="lg:-translate-x-20 -translate-x-5"
    />
  );
}
