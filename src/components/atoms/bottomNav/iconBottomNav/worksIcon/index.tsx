import { FaBook } from "react-icons/fa";
import Link from "next/link";

const WorksIcon = () => {
  return (
    <li className="flex justify-center items-center">
      <Link href="/works" passHref>
        <a>
          <FaBook className="hover:text-slate-600 dark:hover:text-white text-2xl text-slate-500 dark:text-slate-400 duration-300 transition-all" />
        </a>
      </Link>
    </li>
  );
};

export default WorksIcon;
