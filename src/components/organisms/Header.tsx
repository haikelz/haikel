import { HeaderLogo } from "@/atoms/HeaderLogo";
import { ToggleDarkModeHeader } from "@/atoms/ToggleDarkModeHeader";
import { useTheme } from "@/hooks/useTheme";
import HeaderListItem from "@/molecules/HeaderListItem";
import { twJoin } from "tailwind-merge";

type ChangeTheme = () => void;

const Header = () => {
  const [theme, setTheme] = useTheme();
  const changeTheme: ChangeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="fixed top-3 z-10 hidden w-full dark:text-white md:block">
      <nav className="mx-auto w-full max-w-5xl px-4 text-sm">
        <div
          className={twJoin(
            "shadow-smooth onscroll flex h-12 w-full items-center justify-between",
            "rounded-sm bg-white/80 px-4 dark:bg-[#252535]/70"
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

export default Header;
