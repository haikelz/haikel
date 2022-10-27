import { memo } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useScroll } from "@/hooks/useScroll";
import ToggleDarkModeHeader from "@/components/atoms/header/headerListItem/toggleDarkModeHeader";
import HeaderLogo from "@/components/atoms/header/headerLogo";
import HeaderListItem from "@/components/atoms/header/headerListItem";

type ChangeTheme = () => void;

const Header = () => {
  const [theme, setTheme] = useTheme();
  const [scroll] = useScroll();

  const changeTheme: ChangeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={`fixed z-10 hidden w-full bg-slate-50/70 backdrop-blur-lg backdrop-filter dark:bg-dark/70 dark:text-white md:block ${
        scroll > 0 && "border-onscroll"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 text-sm sm:px-6">
        <div className="flex h-12 items-center justify-between">
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
