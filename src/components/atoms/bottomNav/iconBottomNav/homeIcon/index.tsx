import { FaHome } from "react-icons/fa";
import { ThemeContext } from "@/src/context/themeContext";
import Link from "next/link";

const HomeIcon = () => {
  return (
    <li className="flex justify-center items-center">
      <Link href="/" passHref>
        <a>
          <ThemeContext.Consumer>
            {(theme) =>
              theme === "dark" ? (
                <FaHome className="hover:text-white text-2xl text-slate-400 duration-300 transition-all" />
              ) : (
                <FaHome className="text-slate-500 text-2xl hover:text-slate-600 duration-300 transition-all" />
              )
            }
          </ThemeContext.Consumer>
        </a>
      </Link>
    </li>
  );
};

export default HomeIcon;
