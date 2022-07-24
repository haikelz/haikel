import { FaHome } from "react-icons/fa";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

const HomeIcon = () => {
  const router: NextRouter = useRouter();

  return (
    <li className="flex justify-center items-center">
      <Link href="/" passHref>
        <a>
          <FaHome
            className={`text-2xl ${
              router.asPath == "/"
                ? "text-slate-600 dark:text-white"
                : "text-slate-500 dark:text-slate-400"
            } duration-200 transition-all`}
          />
        </a>
      </Link>
    </li>
  );
};

export default HomeIcon;
