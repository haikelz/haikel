import { useTheme } from "next-themes";
import HomeIcon from "@/src/components/atoms/bottomNav/iconBottomNav/homeIcon";
import ToggleDarkIcon from "@/src/components/atoms/bottomNav/iconBottomNav/toggleDarkIcon";
import ContactIcon from "@/src/components/atoms/bottomNav/iconBottomNav/contactIcon";
import WorksIcon from "@/src/components/atoms/bottomNav/iconBottomNav/worksIcon";
import AboutIcon from "@/src/components/atoms/bottomNav/iconBottomNav/aboutIcon";

const BottomNav = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="text-center dark:bg-[#191724] dark:border-slate-800 border-t-[1px] p-5 bg-slate-50 border-slate-200 md:hidden fixed bottom-0 left-0 right-0">
      <div className="flex justify-center px-4 items-center">
        <ul className="flex gap-12 justify-center items-center">
          <HomeIcon theme={theme} />
          <AboutIcon theme={theme} />
          <WorksIcon theme={theme} />
          <ContactIcon theme={theme} />
          <ToggleDarkIcon theme={theme} changeTheme={changeTheme} />
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
