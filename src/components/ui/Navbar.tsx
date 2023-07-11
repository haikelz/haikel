import dynamic from "next/dynamic";
import Link from "next/link";
import { cxm } from "~lib/helpers";
import { spaceGrotesk } from "~lib/utils/fonts";

const SwitchThemeMenu = dynamic(() => import("~ui/menus/SwitchThemeMenu"), { ssr: false });
const NavigationMenu = dynamic(() => import("~ui/menus/NavigationMenu"), { ssr: false });

export default function Navbar() {
  return (
    <nav
      className={cxm(
        "sticky top-0 z-10 w-full",
        "border-b-[1.5px] border-b-gray-300 bg-azure/80 px-4 py-2.5 dark:border-gray-700",
        "backdrop-blur-lg backdrop-filter",
        "dark:bg-black/80 dark:text-gray-100"
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
        <div className="flex items-center justify-center">
          <NavigationMenu />
          <SwitchThemeMenu />
        </div>
      </div>
    </nav>
  );
}
