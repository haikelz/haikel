import { MdLibraryBooks } from "react-icons/md";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

const WorksIcon = () => {
  const router: NextRouter = useRouter();

  return (
    <li className="flex items-center justify-center">
      <Link href="/works" passHref>
        <a>
          <MdLibraryBooks
            className={`${
              router.asPath == "/works"
                ? "text-slate-600 dark:text-white"
                : "text-slate-500 dark:text-slate-400"
            } transition-all duration-200`}
            size={28}
          />
        </a>
      </Link>
    </li>
  );
};

export default WorksIcon;
