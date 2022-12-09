import { HeaderLogo } from "@/components/atoms/headerLogo";
import { ToggleDarkModeHeader } from "@/components/atoms/toggleDarkModeHeader";
import HeaderListItem from "@/components/molecules/headerListItem";
import { useScroll } from "@/hooks/useScroll";
import { useTheme } from "@/hooks/useTheme";
import { memo } from "react";

type ChangeTheme = () => void;

const Header = () => {
  const [theme, setTheme] = useTheme();
  const [scroll] = useScroll();

  const changeTheme: ChangeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={`fixed top-0 z-10 hidden w-full dark:text-white md:block ${
        scroll > 0 ? "onscroll" : ""
      }`}
    >
      <nav className="mx-auto w-full max-w-5xl px-4 text-sm">
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
