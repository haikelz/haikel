import { components } from "@/src/types";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const PreviewIcon = ({ link }: components) => {
  return (
    <Link href={link} passHref>
      <a>
        <FiExternalLink
          className="hover:text-blue-500 duration-500 cursor-pointer"
          size="20px"
        />
      </a>
    </Link>
  );
};

export default PreviewIcon;
