import { FaBook } from "react-icons/fa";
import { components } from "@/src/props";
import Link from "next/link";

const WorksIcon = ({ theme }: components) => {
  return (
    <li className="flex justify-center items-center">
      <Link href="/works" passHref>
        <a>
          {theme === "dark" ? (
            <FaBook className="hover:text-white text-2xl text-slate-400 duration-300 transition-all" />
          ) : (
            <FaBook className="text-slate-500 text-2xl hover:text-slate-600 duration-300 transition-all" />
          )}
        </a>
      </Link>
    </li>
  );
};

export default WorksIcon;
