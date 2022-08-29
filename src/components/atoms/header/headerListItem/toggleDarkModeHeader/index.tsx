import { Components } from "@/src/interfaces";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ToggleDarkModeHeader = ({ theme, changeTheme }: Components) => {
  return (
    <button
      aria-label="toggle Dark Mode"
      type="button"
      className="outline-none"
      onClick={changeTheme}
    >
      {theme === "dark" ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
    </button>
  );
};

export default ToggleDarkModeHeader;
