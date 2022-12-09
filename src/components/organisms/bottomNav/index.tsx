import { ToggleDarkIcon } from "@/components/atoms/toggleDarkIcon";
import { useTheme } from "@/hooks/useTheme";
import { bottomNavList } from "@/utils/data";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { memo } from "react";
import { IconType } from "react-icons/lib";

const BottomNav = () => {
  const [theme, setTheme] = useTheme();
  const router: NextRouter = useRouter();
  const changeTheme: () => void = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav
      className={`sticky bottom-0 left-0 right-0 flex w-full flex-col items-center justify-center md:hidden`}
    >
      <div className="grid w-full grid-cols-5 grid-rows-1 border-t border-slate-300 bg-light p-4 dark:border-slate-600 dark:bg-dark">
        {bottomNavList.map((item, index) => {
          const Icon: IconType = item.icon;
          return (
            <li key={index + 1} className="flex items-center justify-center">
              <Link href={item.link} passHref>
                <Icon
                  className={`${
                    router.asPath === `${item.link}`
                      ? "text-slate-600 dark:text-white"
                      : "text-slate-500 dark:text-slate-400"
                  } transition-all duration-200`}
                  size={28}
                />
              </Link>
            </li>
          );
        })}
        <ToggleDarkIcon theme={theme} changeTheme={changeTheme} />
      </div>
    </nav>
  );
};

export default memo(BottomNav);
