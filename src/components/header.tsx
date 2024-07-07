"use client";

import { HomeIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useScroll } from "~hooks";
import { tw } from "~lib/helpers";

import Menu, { OpenMenu } from "./ui/menu";
import { UnderlineLink } from "./ui/typography";

const SwitchTheme = dynamic(() => import("~ui/menu/switch-theme"), {
  loading: () => (
    <div className="w-8 h-8 animate-pulse rounded-md bg-base-5 dark:bg-base-2"></div>
  ),
  ssr: false,
});

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { scroll } = useScroll(headerRef);

  const elementHeight = headerRef.current?.offsetHeight as number;

  return (
    <>
      <header
        ref={headerRef}
        className={tw(
          "max-w-full flex flex-col justify-center items-center w-full",
          "z-10 sm:px-2 py-3 px-4",
          "fixed top-0 dark:bg-base-0/80 bg-[#EFFFFD]/80 backdrop-blur-md",
          scroll > elementHeight + 20
            ? "border-b-[1.5px] border-gray-200 dark:border-gray-800"
            : ""
        )}
      >
        <nav
          className={tw(
            "max-w-2xl w-full",
            "flex justify-between items-center"
          )}
        >
          <Link href="/" className="decoration-none">
            <button
              type="button"
              aria-label="home"
              className={tw(
                "rounded-md",
                "p-1",
                "bg-base-5",
                "dark:bg-base-1 font-bold"
              )}
            >
              <HomeIcon />
            </button>
          </Link>
          <div className="flex items-center justify-center">
            <OpenMenu />
            <SwitchTheme />
          </div>
        </nav>
      </header>
      <Menu />
    </>
  );
}

const topNavList = [
  { id: 1, route: "/works", name: "Works" },
  { id: 2, route: "/notes", name: "Notes" },
  { id: 3, route: "/tags", name: "Tags" },
  { id: 4, route: "/guestbook", name: "Guestbook" },
];

export function Navigationlink() {
  const pathname = usePathname();

  return (
    <div className="space-x-4 hidden sm:block mr-4">
      {topNavList.map((item) => (
        <UnderlineLink
          role="button"
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
  );
}
