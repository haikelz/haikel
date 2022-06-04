import { FaBook, FaHome, FaUserAlt, FaPaperPlane } from "react-icons/fa";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import Link from "next/link";

const BottomNav = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="text-center dark:bg-[#191724] dark:border-slate-800 border-t-2 p-5 bg-white border-slate-200 md:hidden fixed bottom-0 left-0 right-0">
      <div className="flex justify-center px-4 items-center">
        <ul className="flex gap-12 justify-center items-center">
          <li className="inline-block">
            <Link href="/" passHref>
              <>
                {theme === "dark" ? (
                  <FaHome className="hover:text-white text-2xl text-slate-400 duration-300 transition-all" />
                ) : (
                  <FaHome className="text-slate-500 text-2xl hover:text-slate-600 duration-300 transition-all" />
                )}
              </>
            </Link>
          </li>
          <li className="inline-block">
            <Link href="/about" passHref>
              <>
                {theme === "dark" ? (
                  <FaUserAlt className="hover:text-white text-2xl text-slate-400 duration-300 transition-all" />
                ) : (
                  <FaUserAlt className="text-slate-500 text-2xl hover:text-slate-600 duration-300 transition-all" />
                )}
              </>
            </Link>
          </li>

          <li className="inline-block">
            <Link href="/works" passHref>
              <>
                {theme === "dark" ? (
                  <FaBook className="hover:text-white text-2xl text-slate-400 duration-300 transition-all" />
                ) : (
                  <FaBook className="text-slate-500 text-2xl hover:text-slate-600 duration-300 transition-all" />
                )}
              </>
            </Link>
          </li>

          <li className="inline-block">
            <Link href="/contact" passHref>
              <>
                {theme === "dark" ? (
                  <FaPaperPlane className="hover:text-white text-2xl text-slate-400 duration-300 transition-all" />
                ) : (
                  <FaPaperPlane className="text-slate-500 text-2xl hover:text-slate-600 duration-300 transition-all" />
                )}
              </>
            </Link>
          </li>

          <button
            aria-label="toggle Dark Mode"
            type="button"
            className="inline-block"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <FiSun className="hover:text-white text-2xl text-slate-400 duration-300 transition-all" />
            ) : (
              <FiMoon className="text-slate-500 text-2xl hover:text-slate-600 duration-300 transition-all" />
            )}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
