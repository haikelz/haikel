import dynamic from "next/dynamic";
import Link from "next/link";
import { tw } from "~lib/helpers";
import { ibmPlexSans } from "~lib/utils/fonts";

import Menu, { OpenMenu } from "../menus/menu";
import { Navigationlink } from "./navigation-link";

const SwitchTheme = dynamic(() => import("~ui/menus/switch-theme"), {
  ssr: false,
});

export default function Header() {
  return (
    <header
      className={tw(
        "max-w-full flex flex-col justify-center items-center w-full",
        "fixed sm:sticky top-0 z-10 sm:px-2 sm:py-4 px-4 py-4 bg-azure/80",
        "dark:bg-black/80 backdrop-blur-md"
      )}
    >
      <nav
        className={tw("max-w-2xl w-full", "flex justify-between items-center")}
      >
        <div className="bg-base-0 dark:bg-gray-100">
          <Link
            className={tw(
              "cursor-pointer border-none text-2xl font-bold text-white dark:text-base-0",
              "tracking-widest outline-none",
              "transition-all",
              ibmPlexSans.className
            )}
            href="/"
          >
            は
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
