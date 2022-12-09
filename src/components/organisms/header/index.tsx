import { memo } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useScroll } from "@/hooks/useScroll";
import { ToggleDarkModeHeader } from "@/components/atoms/toggleDarkModeHeader";
import { HeaderLogo } from "@/components/atoms/header/headerLogo";
import HeaderListItem from "@/components/molecules/headerListItem";

type ChangeTheme = () => void;

const Header = () => {
  const [theme, setTheme] = useTheme();
  const [scroll] = useScroll();

  const changeTheme: ChangeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={`z-10 hidden fixed top-0 w-full dark:text-white md:block ${
        scroll > 0 && "onscroll"
      }`}
    >
      <nav className="mx-auto w-full px-4 max-w-5xl text-sm">
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
