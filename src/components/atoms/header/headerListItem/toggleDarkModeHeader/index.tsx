import { components } from "@/src/props";
import { FiSun, FiMoon } from "react-icons/fi";

const ToggleDarkModeHeader = ({ theme, changeTheme }: components) => {
  return (
    <button
      aria-label="toggle Dark Mode"
      type="button"
      className="outline-none"
      onClick={changeTheme}
    >
      {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};

export default ToggleDarkModeHeader;
