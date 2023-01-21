import { useTheme } from "@/hooks/useTheme";
import { ToggleDarkModeTopNav, TopNavLogo } from "@/ui/icons";
import TopNavListItem from "@/ui/lists/TopNavListItem";
import { twJoin } from "tailwind-merge";

type ChangeTheme = () => void;

const TopNav = () => {
  const [theme, setTheme] = useTheme();
  const changeTheme: ChangeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav
      className={twJoin(
        "onscroll fixed z-10 hidden w-full border-b-2",
        "border-b-gray-200 bg-azure/90 py-2",
        "dark:border-b-gray-500 dark:bg-eerieblack/90 dark:text-white",
        "md:block"
      )}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4">
        <TopNavLogo />
        <div className="flex items-center justify-center">
          <div className="hidden md:block">
            <div className="ml-8 flex space-x-10 tracking-widest">
              <TopNavListItem />
              <ToggleDarkModeTopNav theme={theme} changeTheme={changeTheme} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
