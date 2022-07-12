import { FaPaperPlane } from "react-icons/fa";
import Link from "next/link";

const ContactIcon = () => {
  return (
    <li className="flex justify-center items-center">
      <Link href="/contact" passHref>
        <a>
          <FaPaperPlane className="hover:text-slate-600 dark:hover:text-white text-2xl text-slate-500 dark:text-slate-400 duration-300 transition-all" />
        </a>
      </Link>
    </li>
  );
};

export default ContactIcon;
