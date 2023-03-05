import dynamic from "next/dynamic";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { ComponentType } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import { useTheme } from "~hooks/useTheme";
import { topNavList } from "~lib/utils/data";
import { spaceGrotesk } from "~lib/utils/fonts";
import { ThemeProps } from "~types";
import { TopNavLogo } from "~ui/icons";

const ToggleDarkModeTopNav: ComponentType<ThemeProps> = dynamic(
  () => import("~ui/icons").then((icon) => icon.ToggleDarkModeTopNav),
  { ssr: false }
);

const TopNav = () => {
  const [theme, setTheme] = useTheme();
  const router: NextRouter = useRouter();

  return (
    <nav
      className={twJoin(
        "onscroll sticky top-0 z-10 hidden w-full border-b-[1.5px]",
        "border-b-gray-200 bg-azure/90 py-2 px-4",
        "dark:border-b-gray-500 dark:bg-zinc-900/90 dark:text-white",
        "md:block"
      )}
    >
      <div className="mx-auto flex w-full max-w-[44rem] items-center justify-between">
        <TopNavLogo />
        <div className="flex items-center justify-center">
          <div className="hidden md:block">
            <div className="ml-8 flex items-center justify-center space-x-8 tracking-widest">
              {topNavList.map((nav) => (
                <Link
                  role="button"
                  className={twMerge(
                    "cursor-pointer rounded-sm",
                    "px-1 text-base font-semibold",
                    "active:bg-pink-100",
                    "active:dark:bg-slate-800",
                    router.pathname.includes(nav.href)
                      ? "gradient underline decoration-[#0093E9] decoration-dashed underline-offset-[5px]"
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
};

export default TopNav;
