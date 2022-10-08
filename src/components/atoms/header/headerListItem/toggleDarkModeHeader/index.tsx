import { Components } from "@/src/interfaces";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ToggleDarkModeHeader = ({ theme, changeTheme }: Components) => {
  return (
    <button
      aria-label="toggle Dark Mode"
      type="button"
      className="outline-none"
      onClick={changeTheme}
    >
      {theme === "dark" ? <MdOutlineDarkMode size={22} /> : <MdOutlineLightMode size={22} />}
    </button>
  );
};

export default ToggleDarkModeHeader;
