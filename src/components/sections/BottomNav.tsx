import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { ComponentType } from "react";
import { IconType } from "react-icons/lib";
import { twJoin } from "tailwind-merge";
import { useTheme } from "~hooks/useTheme";
import { bottomNavList } from "~lib/utils/data";
import { ThemeProps } from "~types";

const ToggleDarkIcon: ComponentType<ThemeProps> = dynamic(
  () => import("~ui/icons").then((icon) => icon.ToggleDarkIcon),
  {
    ssr: false,
  }
);

const BottomNav = () => {
  const [theme, setTheme] = useTheme();
  const { asPath } = useRouter();

  return (
    <nav
      className={twJoin(
        "fixed bottom-0",
        "flex w-full flex-col items-center justify-center md:hidden"
      )}
    >
      <div
        className={twJoin(
          "w-full max-w-full border-t-[1.5px] border-slate-300",
          "bg-azure p-4 dark:border-slate-600 dark:bg-zinc-900"
        )}
      >
        <div className="flex w-full items-center justify-around">
          {bottomNavList.map((item, index) => {
            const Icon: IconType = item.icon;
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
                  className={twJoin(
                    "transition-all duration-200",
                    item.name === "Home"
                      ? asPath === item.link
                        ? "text-slate-600 dark:text-white"
                        : "text-slate-500 dark:text-slate-400"
                      : asPath.includes(item.link)
                      ? "text-slate-600 dark:text-white"
                      : "text-slate-500 dark:text-slate-400"
                  )}
                  size={28}
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
};

export default BottomNav;
