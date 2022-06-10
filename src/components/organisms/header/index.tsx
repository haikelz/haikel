import { useTheme } from "next-themes";
import ToggleDarkModeHeader from "@/src/components/atoms/header/headerListItem/toggleDarkModeHeader";
import HeaderLogo from "@/src/components/atoms/header/headerLogo";
import HeaderListItem from "@/src/components/atoms/header/headerListItem";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="fixed hidden md:block z-50 w-full backdrop-filter backdrop-blur-lg bg-slate-50/70 dark:bg-[#191724]/90">
      <nav className="text-sm max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center h-12 justify-between">
          <HeaderLogo />

          <div className="flex-row items-center">
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
