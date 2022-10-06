import { Components } from "@/src/interfaces";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const PreviewIcon = ({ link }: Components) => {
  return (
    <Link href={`${link}`} passHref>
      <a>
        <FiExternalLink className="cursor-pointer duration-500 hover:text-blue-500" size="20px" />
      </a>
    </Link>
  );
};

export default PreviewIcon;
