import { Components } from "@/src/interfaces";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ToggleDarkIcon = ({ theme, changeTheme }: Components) => {
  return (
    <button
      aria-label="toggle Dark Mode"
      type="button"
      className="flex justify-center items-center outline-none"
      onClick={changeTheme}
    >
      {theme === "dark" ? (
        <MdLightMode className="hover:text-white text-2xl text-slate-400 duration-300 transition-all" />
      ) : (
        <MdDarkMode className="text-slate-500 text-2xl hover:text-slate-600 duration-300 transition-all" />
      )}
    </button>
  );
};

export default ToggleDarkIcon;
