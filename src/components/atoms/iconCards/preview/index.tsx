import { LinkIcon } from "@/types";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const PreviewIcon = ({ link }: LinkIcon) => {
  return (
    <Link href={`${link}`} passHref>
      <FiExternalLink className="cursor-pointer duration-500 hover:text-blue-500" size="20px" />
    </Link>
  );
};

export default PreviewIcon;
