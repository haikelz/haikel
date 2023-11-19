"use client";

import { atom, useAtom, useAtomValue } from "jotai";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { tw } from "~lib/helpers";

import { UnderlineLink } from "../typography";

const topNavList = [
  { id: 1, route: "/works", name: "Works" },
  { id: 2, route: "/notes", name: "Notes" },
  { id: 3, route: "/tags", name: "Tags" },
  { id: 4, route: "/guestbook", name: "Guestbook" },
];

const isOpenAtom = atom<boolean>(false);

export default function Menu() {
  const isOpen = useAtomValue(isOpenAtom);

  const pathname = usePathname();

  return (
    <>
      {isOpen ? (
        <div
          className={tw(
            "space-y-4 pt-4 flex flex-col items-start justify-start",
            "w-full sm:hidden"
          )}
        >
          {topNavList.map((item) => (
            <UnderlineLink
              className={tw(
                pathname.includes(item.route)
                  ? "decoration-dashed"
                  : "decoration-none"
              )}
              key={item.id}
              href={item.route}
            >
              {item.name}
            </UnderlineLink>
          ))}
        </div>
      ) : null}
    </>
  );
}

export function OpenMenu() {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);

  return (
    <button
      type="button"
      aria-label="menu"
      onClick={() => setIsOpen(!isOpen)}
      className="block mr-4 sm:hidden"
    >
      {isOpen ? <XIcon /> : <MenuIcon />}
    </button>
  );
}

export function SwitchTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={tw(
        "rounded-sm",
        "p-1",
        "hover:bg-base-5",
        "active:bg-base-4",
        "dark:hover:bg-base-2 dark:active:bg-base-1 font-bold"
      )}
      type="button"
      aria-label="switch theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
