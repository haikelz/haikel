import { HomeIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
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
  return (
    <header
      className={tw(
        "max-w-full flex flex-col justify-center items-center w-full",
        "fixed top-0 z-10 sm:px-2 py-3 px-4 bg-[#EFFFFD]/80",
        "dark:bg-black/80 backdrop-blur-md"
      )}
    >
      <nav
        className={tw("max-w-2xl w-full", "flex justify-between items-center")}
      >
        <div>
          <Link href="/" className="decoration-none">
            <button
              type="button"
              aria-label="home"
              className={tw(
                "rounded-md",
                "p-1",
                "bg-base-5",
                "active:bg-base-4",
                "dark:bg-base-2 dark:active:bg-base-1 font-bold"
              )}
            >
              <HomeIcon />
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <OpenMenu />
          <Navigationlink />
          <SwitchTheme />
        </div>
      </nav>
      <Menu />
    </header>
  );
}
