"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentType } from "react";
import { useTheme } from "~hooks";
import { cxm } from "~lib/helpers/cxm";
import { bottomNavList } from "~lib/utils/data";
import { ThemeProps } from "~models";

const ToggleDarkIcon: ComponentType<ThemeProps> = dynamic(
  () => import("~ui/icons").then((icon) => icon.ToggleDarkIcon),
  {
    ssr: false,
  }
);

export default function BottomNav() {
  const [theme, setTheme] = useTheme();
  const pathname = usePathname();

  return (
    <nav
      className={cxm(
        "fixed bottom-0",
        "flex w-full flex-col items-center justify-center",
        "md:hidden"
      )}
    >
      <div
        className={cxm(
          "w-full max-w-full border-t-[1.5px] border-slate-300",
          "bg-azure p-4",
          "dark:border-slate-600 dark:bg-zinc-900"
        )}
      >
        <div className="flex w-full items-center justify-around">
          {bottomNavList.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                className="flex items-center justify-center"
                role="button"
                key={index + 1}
                href={item.link}
                aria-label={item.name}
                passHref
              >
                <Icon
                  className={cxm(
                    "transition-all duration-200",
                    item.name === "Home"
                      ? pathname === item.link
                        ? "text-slate-600 dark:text-white"
                        : "text-slate-500 dark:text-slate-400"
                      : pathname?.includes(item.link)
                      ? "text-slate-600 dark:text-white"
                      : "text-slate-500 dark:text-slate-400"
                  )}
                />
              </Link>
            );
          })}
          <ToggleDarkIcon
            theme={theme}
            changeTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </div>
      </div>
    </nav>
  );
}
