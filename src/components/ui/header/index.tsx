"use client";

import { m } from "framer-motion";
import { Contact, HomeIcon, NotebookIcon, NotebookPen } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRef } from "react";
import { useScroll } from "~hooks";
import { tw } from "~lib/helpers";

import Menu, { OpenMenu } from "../menus/menu";
import { Navigationlink } from "./navigation-link";

const SwitchTheme = dynamic(() => import("~ui/menus/switch-theme"), {
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
          "z-10 sm:px-2 py-3 px-4 bg-[#EFFFFD]/80",
          "dark:bg-black/80 backdrop-blur-md",
          "fixed top-0",
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
            <SwitchTheme />
          </div>
        </nav>
        <Menu />
      </header>
    </>
  );
}
