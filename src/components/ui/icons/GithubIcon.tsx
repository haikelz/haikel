import { LinkIconProps } from "@/types";
import Link from "next/link";
import { GrGithub } from "react-icons/gr";

export const GithubIcon = ({ link }: LinkIconProps) => {
  return (
    <Link href={`${link}`} passHref>
      <GrGithub
        className="mr-2 cursor-pointer transition-all ease-in-out hover:text-blue-400"
        size="20px"
      />
    </Link>
  );
};
