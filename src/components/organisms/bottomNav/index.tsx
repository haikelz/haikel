import { useTheme } from "@/hooks/useTheme";
import { memo } from "react";
import HomeIcon from "@/components/atoms/bottomNav/iconBottomNav/homeIcon";
import ToggleDarkIcon from "@/components/atoms/bottomNav/iconBottomNav/toggleDarkIcon";
import ContactIcon from "@/components/atoms/bottomNav/iconBottomNav/contactIcon";
import WorksIcon from "@/components/atoms/bottomNav/iconBottomNav/worksIcon";
import AboutIcon from "@/components/atoms/bottomNav/iconBottomNav/aboutIcon";

type ChangeTheme = () => void;

const BottomNav = () => {
  const [theme, setTheme] = useTheme();
  const changeTheme: ChangeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="fixed bottom-0 left-0 right-0 grid grid-cols-5 grid-rows-1 border-t border-slate-300 bg-slate-50 p-5 dark:border-slate-600 dark:bg-dark md:hidden">
        <HomeIcon />
        <AboutIcon />
        <WorksIcon />
        <ContactIcon />
        <ToggleDarkIcon theme={theme} changeTheme={changeTheme} />
      </div>
    </div>
  );
};

export default memo(BottomNav);
