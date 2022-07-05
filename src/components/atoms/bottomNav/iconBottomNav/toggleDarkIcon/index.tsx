import { ChangeThemeContext } from "@/src/context/changeTheme";
import { components } from "@/src/props";
import { FiSun, FiMoon } from "react-icons/fi";

const ToggleDarkIcon = ({ theme }: components) => {
  return (
    <>
      <ChangeThemeContext.Consumer>
        {(changeTheme) => (
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
        )}
      </ChangeThemeContext.Consumer>
    </>
  );
};

export default ToggleDarkIcon;
