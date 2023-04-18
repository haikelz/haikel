"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentType } from "react";
import { useTheme } from "~hooks";
import { cxm } from "~lib/helpers/cxm";
import { topNavList } from "~lib/utils/data";
import { spaceGrotesk } from "~lib/utils/fonts";
import { ThemeProps } from "~models";
import { TopNavLogo } from "~ui/icons";

const ToggleDarkModeTopNav: ComponentType<ThemeProps> = dynamic(
  () => import("~ui/icons").then((icon) => icon.ToggleDarkModeTopNav),
  { ssr: false }
);

export default function TopNav() {
  const [theme, setTheme] = useTheme();
  const pathname = usePathname();

  return (
    <nav
      className={cxm(
        "sticky top-0 z-10 hidden w-full border-b-[1.5px]",
        "border-b-gray-200 bg-azure/90 px-4 py-2",
        "backdrop-blur-lg backdrop-filter",
        "dark:border-b-gray-500 dark:bg-base0/90 dark:text-white",
        "md:block"
      )}
    >
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between">
        <TopNavLogo />
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
              <ToggleDarkModeTopNav
                theme={theme}
                changeTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
