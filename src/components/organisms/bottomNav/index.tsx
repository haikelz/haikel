import { useTheme } from "@/src/hooks/useTheme";
import HomeIcon from "@/src/components/atoms/bottomNav/iconBottomNav/homeIcon";
import ToggleDarkIcon from "@/src/components/atoms/bottomNav/iconBottomNav/toggleDarkIcon";
import ContactIcon from "@/src/components/atoms/bottomNav/iconBottomNav/contactIcon";
import WorksIcon from "@/src/components/atoms/bottomNav/iconBottomNav/worksIcon";
import AboutIcon from "@/src/components/atoms/bottomNav/iconBottomNav/aboutIcon";

const BottomNav = () => {
  const [theme, setTheme] = useTheme();
  const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="grid grid-cols-5 grid-rows-1 dark:bg-[#191724] dark:border-slate-600 border-t-[1px] p-5 bg-slate-50 border-slate-300 md:hidden fixed bottom-0 left-0 right-0">
        <HomeIcon />
        <AboutIcon />
        <WorksIcon />
        <ContactIcon />
        <ToggleDarkIcon theme={theme} changeTheme={changeTheme} />
      </div>
    </div>
  );
};

export default BottomNav;
