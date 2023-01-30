import dynamic from "next/dynamic";
import { twJoin } from "tailwind-merge";
import { useTheme } from "~hooks/useTheme";
import { TopNavLogo } from "~ui/icons";
import TopNavListItem from "~ui/lists/TopNavListItem";

const ToggleDarkModeTopNav = dynamic(
  () => import("~ui/icons").then((icon) => icon.ToggleDarkModeTopNav),
  { ssr: false }
);

const TopNav = () => {
  const [theme, setTheme] = useTheme();

  return (
    <nav
      className={twJoin(
        "onscroll sticky top-0 z-10 hidden w-full border-b-2",
        "border-b-gray-200 bg-azure/90 py-2",
        "dark:border-b-gray-500 dark:bg-eerieblack/90 dark:text-white",
        "md:block"
      )}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4">
        <TopNavLogo />
        <div className="flex items-center justify-center">
          <div className="hidden md:block">
            <div className="ml-8 flex items-center justify-center space-x-8 tracking-widest">
              <TopNavListItem />
              <ToggleDarkModeTopNav
                theme={theme}
                changeTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
