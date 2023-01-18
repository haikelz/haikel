import { useTheme } from "@/hooks/useTheme";
import { ToggleDarkModeHeader, HeaderLogo } from "@/ui/icons";
import HeaderListItem from "@/ui/lists/HeaderListItem";
import { twJoin } from "tailwind-merge";

type ChangeTheme = () => void;

const Header = () => {
  const [theme, setTheme] = useTheme();
  const changeTheme: ChangeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={twJoin(
        "onscroll fixed z-10 hidden w-full border-b-2",
        "border-b-gray-200 bg-azure/90 py-2",
        "dark:border-b-gray-500 dark:bg-eerieblack/90 dark:text-white",
        "md:block"
      )}
    >
      <nav className="mx-auto w-full max-w-5xl px-4">
        <div className="flex w-full items-center justify-between">
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
