import { LinkIcon } from "@/types";
import { GrGithub } from "react-icons/gr";
import Link from "next/link";

const GithubIcon = ({ link }: LinkIcon) => {
  return (
    <Link href={`${link}`} passHref>
      <a>
        <GrGithub className="mr-2 cursor-pointer duration-500 hover:text-blue-400" size="20px" />
      </a>
    </Link>
  );
};

export default GithubIcon;
