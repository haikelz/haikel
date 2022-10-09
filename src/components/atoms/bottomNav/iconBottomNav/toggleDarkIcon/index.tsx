import { Components } from "@/src/interfaces";
import { domAnimation, LazyMotion, m } from "framer-motion";
import MoonIcon from "../moonIcon";
import SunIcon from "../sunIcon";

const ToggleDarkIcon = ({ theme, changeTheme }: Components) => {
  return (
    <div className="flex items-center justify-center">
      <LazyMotion features={domAnimation}>
        <m.button type="button" onClick={changeTheme}>
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </m.button>
      </LazyMotion>
    </div>
  );
};

export default ToggleDarkIcon;
