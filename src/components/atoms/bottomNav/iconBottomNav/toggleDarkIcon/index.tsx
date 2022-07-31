import { Components } from "@/src/interfaces";
import { FiSun, FiMoon } from "react-icons/fi";

const ToggleDarkIcon = ({ theme, changeTheme }: Components) => {
  return (
    <button
      aria-label="toggle Dark Mode"
      type="button"
      className="flex justify-center items-center outline-none"
      onClick={changeTheme}
    >
      {theme === "dark" ? (
        <FiSun className="hover:text-white text-2xl text-slate-400 duration-300 transition-all" />
      ) : (
        <FiMoon className="text-slate-500 text-2xl hover:text-slate-600 duration-300 transition-all" />
      )}
    </button>
  );
};

export default ToggleDarkIcon;
