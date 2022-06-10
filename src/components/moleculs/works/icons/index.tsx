import { components } from "@/src/types";
import GithubIcon from "@/src/components/atoms/bottomNav/iconCards/github";
import PreviewIcon from "@/src/components/atoms/bottomNav/iconCards/preview";

const Icons = ({ linkPreview, linkGithub }: components) => {
  return (
    <div className="flex mt-3 justify-end">
      <GithubIcon link={linkPreview} />
      <PreviewIcon link={linkGithub} />
    </div>
  );
};

export default Icons;
