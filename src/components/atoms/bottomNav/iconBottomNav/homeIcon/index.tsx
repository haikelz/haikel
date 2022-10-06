import { MdHomeFilled } from "react-icons/md";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

const HomeIcon = () => {
  const router: NextRouter = useRouter();

  return (
    <li className="flex items-center justify-center">
      <Link href="/" passHref>
        <a>
          <MdHomeFilled
            className={`${
              router.asPath == "/"
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

export default HomeIcon;
