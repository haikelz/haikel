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
      className={`fixed hidden md:block z-50 w-full backdrop-filter backdrop-blur-lg bg-slate-50/70 dark:text-white dark:bg-dark/70 ${
        scroll > 0 && "border-onscroll"
      }`}
    >
      <nav className="text-sm max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center h-12 justify-between">
          <HeaderLogo />
          <div className="flex justify-center items-center">
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
