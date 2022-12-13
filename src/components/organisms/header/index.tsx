import { HeaderLogo } from "@/components/atoms/headerLogo";
import { ToggleDarkModeHeader } from "@/components/atoms/toggleDarkModeHeader";
import HeaderListItem from "@/components/molecules/headerListItem";
import { cn } from "@/helpers/cn";
import { useScroll } from "@/hooks/useScroll";
import { useTheme } from "@/hooks/useTheme";
import { memo } from "react";

type ChangeTheme = () => void;

const Header = () => {
  const [theme, setTheme] = useTheme();
  const [scroll] = useScroll();

  const changeTheme: ChangeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="fixed top-3 z-10 hidden w-full dark:text-white md:block">
      <nav className="mx-auto w-full max-w-5xl rounded-md px-4 text-sm">
        <div
          className={cn(
            "shadow-smooth flex h-12 w-full items-center justify-between rounded-md bg-white/80 px-4 dark:bg-[#252535]/70",
            scroll > 0 ? "onscroll" : ""
          )}
        >
          <HeaderLogo />
          <div className="flex items-center justify-center">
            <div className="hidden md:block">
              <div className="ml-8 flex space-x-4 tracking-widest">
                <HeaderListItem />
                <ToggleDarkModeHeader theme={theme} changeTheme={changeTheme} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
