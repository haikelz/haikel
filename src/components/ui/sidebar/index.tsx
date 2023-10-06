import dynamic from "next/dynamic";
import Link from "next/link";
import { tw } from "~lib/helpers";
import { ibmPlexSans } from "~lib/utils/fonts";

import { Navigationlink } from "./navigation-link";

const SwitchThemeMenu = dynamic(() => import("~ui/menus/switch-theme-menu"), { ssr: false });

export default function Sidebar() {
  return (
    <aside
      className={tw(
        "flex md:flex-col fixed md:sticky bottom-3 z-10",
        "md:max-h-full md:h-[390px] md:-translate-y-1/2 md:top-1/2 max-w-full",
        "md:w-auto w-[320px] md:left-0 md:translate-x-0 rounded-md md:rounded-none",
        "left-1/2 -translate-x-1/2 bg-white",
        "dark:bg-base-1 drop-shadow-md md:px-2 md:py-4 px-4 py-2 items-center justify-between"
      )}
    >
      <div className="bg-base-0 dark:bg-white">
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
      <div className="flex md:flex-col items-center justify-center space-x-3 md:space-x-0 md:space-y-5">
        <Navigationlink />
        <SwitchThemeMenu />
      </div>
    </aside>
  );
}
