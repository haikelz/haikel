import { components } from "@/src/props";
import { GrGithub } from "react-icons/gr";
import Link from "next/link";

const GithubIcon = ({ link }: components) => {
  return (
    <Link href={`${link}`} passHref>
      <a>
        <GrGithub
          className="hover:text-blue-400 duration-500 mr-2 cursor-pointer"
          size="20px"
        />
      </a>
    </Link>
  );
};

export default GithubIcon;
