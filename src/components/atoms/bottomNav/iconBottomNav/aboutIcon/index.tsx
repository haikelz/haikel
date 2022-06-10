import { FaUserAlt } from "react-icons/fa";
import { components } from "@/src/types";
import Link from "next/link";

const AboutIcon = ({ theme }: components) => {
  return (
    <li className="inline-block">
      <Link href="/about" passHref>
        <a>
          {theme === "dark" ? (
            <FaUserAlt className="hover:text-white text-2xl text-slate-400 duration-300 transition-all" />
          ) : (
            <FaUserAlt className="text-slate-500 text-2xl hover:text-slate-600 duration-300 transition-all" />
          )}
        </a>
      </Link>
    </li>
  );
};

export default AboutIcon;
