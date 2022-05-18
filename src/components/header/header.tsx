import { useState } from "react";
import { Box } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Link from "next/link";
import Nav from "./nav";
import NavMobile from "./navMobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const bg = useColorModeValue("#f1f5f9", "#191724");
  const color = useColorModeValue("black", "white");

  return (
    <Box position="fixed" className="z-50" w="full" bg={bg} color={color}>
      <nav>
        <div className="text-sm max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center h-12 justify-between">
            <Link href="/" passHref>
              <p className="logo cursor-pointer text-2xl font-bold tracking-widest border-none outline-none hover:text-blue-600 duration-500">
                Haikel
              </p>
            </Link>

            <div className="flex-row items-center">
              <div className="flex-shrink-0"></div>
              <div className="hidden md:block">
                <div className="ml-8 flex space-x-4 tracking-widest">
                  <Nav />
                  <IconButton
                    className="mt-0.5"
                    icon={isDark ? <FiSun /> : <FiMoon />}
                    size="sm"
                    aria-label="toggle dark mode"
                    onClick={toggleColorMode}
                  ></IconButton>
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
        </div>

        {/*Navbar*/}
        {isOpen ? (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavMobile />
              <p
                onClick={toggleColorMode}
                className="hover:bg-[#2a273f] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {colorMode === "light" ? "Dark" : "Light"} Mode
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
    </Box>
  );
};

export default Header;
