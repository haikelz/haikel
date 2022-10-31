import { Theme } from "@/types";
import { domAnimation, LazyMotion, m } from "framer-motion";
import MoonIcon from "../moonIcon";
import SunIcon from "../sunIcon";

const ToggleDarkIcon = ({ theme, changeTheme }: Theme) => {
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
