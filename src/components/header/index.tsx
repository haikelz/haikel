import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import Link from "next/link";
import Nav from "./nav";
import NavMobile from "./navMobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed hidden md:block z-50 w-full bg-white dark:bg-[#191724]">
      <nav className="text-sm max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center h-12 justify-between">
          <Link href="/" passHref>
            <p className="logo cursor-pointer text-2xl font-bold tracking-widest border-none outline-none hover:text-blue-600 duration-300">
              Haikel
            </p>
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
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-1 rounded-md focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <FiMenu className="block h-6 w-6" />
              ) : (
                <FiX className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/*Navbar*/}
      {isOpen ? (
        <nav className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavMobile />
            <p
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-[#2a273f] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {theme === "light" ? "Dark" : "Light"} Mode
            </p>
          </div>
        </nav>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
