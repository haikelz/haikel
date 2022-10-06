import { MdAccountCircle } from "react-icons/md";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

const AboutIcon = () => {
  const router: NextRouter = useRouter();

  return (
    <li className="flex items-center justify-center">
      <Link href="/about" passHref>
        <a>
          <MdAccountCircle
            className={`${
              router.asPath == "/about"
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

export default AboutIcon;
