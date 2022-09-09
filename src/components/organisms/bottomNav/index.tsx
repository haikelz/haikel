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
    <div className="flex flex-col justify-center items-center w-full">
      <div className="grid grid-cols-5 grid-rows-1 dark:bg-dark dark:border-slate-600 border-t p-5 bg-slate-50 border-slate-300 md:hidden fixed bottom-0 left-0 right-0">
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
