import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import Link from "next/link";
import Nav from "./nav";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed hidden md:block z-50 w-full backdrop-filter backdrop-blur-lg bg-white/70 dark:bg-[#191724]/90">
      <nav className="text-sm max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center h-12 justify-between">
          <Link href="/" passHref>
            <a className="logo cursor-pointer text-2xl font-bold tracking-widest border-none outline-none hover:text-blue-600 duration-300">
              Haikel
            </a>
          </Link>

          <div className="flex-row items-center">
            <div className="flex-shrink-0"></div>
            <div className="hidden md:block">
              <div className="ml-8 flex space-x-4 tracking-widest">
                <Nav />
                <button
                  aria-label="toggle Dark Mode"
                  type="button"
                  className=""
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? <FiSun /> : <FiMoon />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
