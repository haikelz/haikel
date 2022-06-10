import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { components } from "@/src/types";

const PreviewIcon = ({ link }: components) => {
  return (
    <Link href={link} passHref>
      <span>
        <FiExternalLink className="hover:text-blue-500 duration-500 cursor-pointer" />
      </span>
    </Link>
  );
};

export default PreviewIcon;
