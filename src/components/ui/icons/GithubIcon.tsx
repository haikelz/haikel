import Link from "next/link";
import { GrGithub } from "react-icons/gr";
import { LinkIconProps } from "~types";

export const GithubIcon = ({ link }: LinkIconProps) => {
  return (
    <Link role="button" href={`${link}`} aria-label="Github">
      <GrGithub
        className="mr-2 cursor-pointer transition-all ease-in-out hover:text-blue-400"
        size="20px"
      />
    </Link>
  );
};
