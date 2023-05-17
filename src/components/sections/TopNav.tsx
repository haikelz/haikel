"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { cxm } from "~lib/helpers/cxm";
import { spaceGrotesk } from "~lib/utils/fonts";

const SwitchThemeButton = dynamic(() => import("~ui/SwitchThemeButton"), { ssr: false });
const Menu = dynamic(() => import("~ui/Menu"), { ssr: false });

export default function TopNav() {
  return (
    <nav
      className={cxm(
        "sticky top-0 z-10 hidden w-full",
        "border-b-gray-300 bg-azure/80 px-4 py-2",
        "backdrop-blur-lg backdrop-filter",
        "dark:border-b-gray-500 dark:bg-base-0/80 dark:text-white",
        "md:block"
      )}
    >
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between">
        <div className="gradient dark:gradient-dark -rotate-6">
          <Link
            className={cxm(
              "cursor-pointer border-none text-xl font-bold",
              "tracking-widest outline-none",
              "transition-all",
              "hover:text-blue-500",
              spaceGrotesk.className
            )}
            href="/"
          >
            ハキム
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-6 tracking-widest">
          <Menu />
          <SwitchThemeButton navPosition="top" />
        </div>
      </div>
    </nav>
  );
}
