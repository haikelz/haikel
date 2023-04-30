"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cxm } from "~lib/helpers/cxm";
import { bottomNavList } from "~lib/utils/data";

const SwitchThemeButton = dynamic(() => import("~ui/SwitchThemeButton"), { ssr: false });

export default function BottomNav() {
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
          "w-full max-w-full border-t-[1.5px] border-gray-300",
          "bg-azure p-4",
          "dark:border-gray-600 dark:bg-base-0"
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
                    "transition-all ease-in-out",
                    item.name === "Home"
                      ? pathname === item.link
                        ? "text-gray-600 dark:text-white"
                        : "text-gray-500 dark:text-gray-400"
                      : pathname?.includes(item.link)
                      ? "text-gray-600 dark:text-white"
                      : "text-gray-500 dark:text-gray-400"
                  )}
                />
              </Link>
            );
          })}
          <SwitchThemeButton navPosition="bottom" />
        </div>
      </div>
    </nav>
  );
}
