import { LinkIconProps } from "@/types";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export const PreviewIcon = ({ link }: LinkIconProps) => {
  return (
    <Link href={`${link}`} passHref>
      <FiExternalLink
        className="cursor-pointer transition-all ease-in-out hover:text-blue-500"
        size="20px"
      />
    </Link>
  );
};