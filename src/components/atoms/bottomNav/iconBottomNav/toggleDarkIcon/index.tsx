import { components } from "@/src/types";
import { FiSun, FiMoon } from "react-icons/fi";

const ToggleDarkIcon = ({ theme, changeTheme }: components) => {
  return (
    <>
      <button
        aria-label="toggle Dark Mode"
        type="button"
        className="inline-block"
        onClick={changeTheme}
      >
        {theme === "dark" ? (
          <FiSun className="hover:text-white text-2xl text-slate-400 duration-300 transition-all" />
        ) : (
          <FiMoon className="text-slate-500 text-2xl hover:text-slate-600 duration-300 transition-all" />
        )}
      </button>
    </>
  );
};

export default ToggleDarkIcon;
