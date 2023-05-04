"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cxm } from "~lib/helpers/cxm";
import { topNavList } from "~lib/utils/data";
import { spaceGrotesk } from "~lib/utils/fonts";

const SwitchThemeButton = dynamic(() => import("~ui/SwitchThemeButton"), { ssr: false });

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav
      className={cxm(
        "sticky top-0 z-10 hidden w-full border-b-[1.5px]",
        "border-b-gray-300 bg-azure/90 px-4 py-2",
        "backdrop-blur-lg backdrop-filter",
        "dark:border-b-gray-500 dark:bg-base-0/90 dark:text-white",
        "md:block"
      )}
    >
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between">
        <div className="gradient dark:gradient-dark -rotate-6">
          <Link
            className={cxm(
              "cursor-pointer border-none text-xl font-bold",
              "tracking-widest outline-none",
              "transition-all ease-in-out",
              "hover:text-blue-500",
              spaceGrotesk.className
            )}
            href="/"
          >
            ハキム
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <div className="hidden md:block">
            <div className="flex items-center justify-center space-x-6 tracking-widest">
              {topNavList.map((nav) => (
                <Link
                  role="button"
                  className={cxm(
                    "cursor-pointer rounded-sm",
                    "px-1 font-semibold",
                    "md:text-lg",
                    "active:bg-pink-100",
                    "active:dark:bg-gray-800",
                    pathname?.includes(nav.href)
                      ? "gradient dark:gradient-dark underline decoration-[#0093E9] decoration-dashed underline-offset-[5px]"
                      : "",
                    spaceGrotesk.className
                  )}
                  href={nav.href}
                  key={nav.id}
                  aria-label={nav.text}
                >
                  {nav.text}
                </Link>
              ))}
              <SwitchThemeButton navPosition="top" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
