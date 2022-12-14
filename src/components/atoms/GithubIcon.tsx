import { LinkIcon } from "@/types";
import Link from "next/link";
import { GrGithub } from "react-icons/gr";

export const GithubIcon = ({ link }: LinkIcon) => {
  return (
    <Link href={`${link}`} passHref>
      <GrGithub className="mr-2 cursor-pointer duration-500 hover:text-blue-400" size="20px" />
    </Link>
  );
};
