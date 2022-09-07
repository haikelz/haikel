import { Components } from "@/src/interfaces";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ToggleDarkIcon = ({ theme, changeTheme }: Components) => {
  return (
    <div className="flex justify-center items-center">
      <button type="button" className="outline-none" onClick={changeTheme}>
        {theme === "dark" ? (
          <MdOutlineLightMode
            className="hover:text-white text-slate-400 duration-300 transition-all"
            size={28}
          />
        ) : (
          <MdOutlineDarkMode
            className="text-slate-500 hover:text-slate-600 duration-300 transition-all"
            size={28}
          />
        )}
      </button>
    </div>
  );
};

export default ToggleDarkIcon;
