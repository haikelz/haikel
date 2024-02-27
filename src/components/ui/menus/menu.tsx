"use client";

import { useAtom } from "jotai";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { match } from "ts-pattern";
import { useClickOutside } from "~hooks";
import { tw } from "~lib/helpers";
import { isOpenAtom } from "~store";

import { UnderlineLink } from "../typography";

const topNavList = [
  { id: 1, route: "/works", name: "Works" },
  { id: 2, route: "/notes", name: "Notes" },
  { id: 3, route: "/tags", name: "Tags" },
  { id: 4, route: "/guestbook", name: "Guestbook" },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);

  const pathname = usePathname();

  const mobileNavRef = useRef<HTMLDivElement>(null);

  useClickOutside(setIsOpen, mobileNavRef);

  return (
    <>
      {match({ isOpen: isOpen })
        .with({ isOpen: true }, () => (
          <div
            ref={mobileNavRef}
            className={tw(
              "space-y-4 pt-4 flex flex-col items-start justify-start",
              "w-full sm:hidden"
            )}
          >
            {topNavList.map((item) => (
              <UnderlineLink
                role="button"
                className={tw(
                  pathname.includes(item.route)
                    ? "decoration-solid"
                    : "decoration-none"
                )}
                key={item.id}
                href={item.route}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </UnderlineLink>
            ))}
          </div>
        ))
        .otherwise(() => null)}
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
      className={tw(
        "rounded-md block mr-4 sm:hidden",
        "p-1",
        "bg-base-5",
        "dark:bg-base-1 font-bold"
      )}
    >
      {match({ isOpen: isOpen })
        .with({ isOpen: true }, () => <XIcon />)
        .otherwise(() => (
          <MenuIcon />
        ))}
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
      {match({ theme: theme })
        .with({ theme: "dark" }, () => <SunIcon />)
        .otherwise(() => (
          <MoonIcon />
        ))}
    </button>
  );
}
