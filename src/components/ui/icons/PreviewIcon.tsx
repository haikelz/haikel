import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { LinkIconProps } from "~types";

export const PreviewIcon = ({ link }: LinkIconProps) => {
  return (
    <Link role="button" href={`${link}`} aria-label="description">
      <FiExternalLink
        className="cursor-pointer transition-all ease-in-out hover:text-blue-500"
        size="20px"
      />
    </Link>
  );
};
