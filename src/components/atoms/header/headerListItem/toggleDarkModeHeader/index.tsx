import { components } from "@/src/types";
import { FiSun, FiMoon } from "react-icons/fi";

const ToggleDarkModeHeader = ({ changeTheme, theme }: components) => {
  return (
    <button
      aria-label="toggle Dark Mode"
      type="button"
      className=""
      onClick={changeTheme}
    >
      {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
};

export default ToggleDarkModeHeader;
