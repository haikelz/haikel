import { Components } from "@/src/interfaces";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ToggleDarkIcon = ({ theme, changeTheme }: Components) => {
  return (
    <div className="flex items-center justify-center">
      <button type="button" className="outline-none" onClick={changeTheme}>
        {theme === "dark" ? (
          <MdOutlineLightMode
            className="text-slate-400 transition-all duration-300 hover:text-white"
            size={28}
          />
        ) : (
          <MdOutlineDarkMode
            className="text-slate-500 transition-all duration-300 hover:text-slate-600"
            size={28}
          />
        )}
      </button>
    </div>
  );
};

export default ToggleDarkIcon;
