import dynamic from "next/dynamic";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { IconType } from "react-icons/lib";
import { twJoin } from "tailwind-merge";
import { useTheme } from "~hooks/useTheme";
import { bottomNavList } from "~lib/utils/data";

const ToggleDarkIcon = dynamic(() => import("~ui/icons").then((icon) => icon.ToggleDarkIcon), {
  ssr: false,
});

const BottomNav = () => {
  const [theme, setTheme] = useTheme();
  const router: NextRouter = useRouter();

  return (
    <nav
      className={twJoin(
        "sticky inset-0",
        "flex w-full flex-col items-center justify-center md:hidden"
      )}
    >
      <div
        className={twJoin(
          "grid w-full grid-cols-4 grid-rows-1 border-t border-slate-300",
          "bg-azure p-4 dark:border-slate-600 dark:bg-eerieblack"
        )}
      >
        {bottomNavList.map((item, index) => {
          const Icon: IconType = item.icon;
          return (
            <div key={index + 1} className="flex items-center justify-center">
              <Link href={item.link} aria-label={item.name} passHref>
                <Icon
                  className={twJoin(
                    "transition-all duration-200",
                    router.asPath === `${item.link}`
                      ? "text-slate-600 dark:text-white"
                      : "text-slate-500 dark:text-slate-400"
                  )}
                  size={28}
                />
              </Link>
            </div>
          );
        })}
        <ToggleDarkIcon
          theme={theme}
          changeTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      </div>
    </nav>
  );
};

export default BottomNav;
