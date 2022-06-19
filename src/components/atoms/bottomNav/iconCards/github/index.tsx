import { components } from "@/src/types";
import { GrGithub } from "react-icons/gr";
import Link from "next/link";

const GithubIcon = ({ link }: components) => {
  return (
    <Link href={link} passHref>
      <a>
        <GrGithub className="hover:text-blue-400 duration-500 mr-2 cursor-pointer" />
      </a>
    </Link>
  );
};

export default GithubIcon;
