import { FaPaperPlane } from "react-icons/fa";
import { components } from "@/src/types";
import Link from "next/link";

const ContactIcon = ({ theme }: components) => {
  return (
    <li className="inline-block">
      <Link href="/contact" passHref>
        <a>
          {theme === "dark" ? (
            <FaPaperPlane className="hover:text-white text-2xl text-slate-400 duration-300 transition-all" />
          ) : (
            <FaPaperPlane className="text-slate-500 text-2xl hover:text-slate-600 duration-300 transition-all" />
          )}
        </a>
      </Link>
    </li>
  );
};

export default ContactIcon;
