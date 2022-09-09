import { Components } from "@/src/interfaces";
import GithubIcon from "@/components/atoms/iconCards/github";
import PreviewIcon from "@/components/atoms/iconCards/preview";

const Icons = ({ linkPreview, linkGithub }: Components) => {
  return (
    <div className="flex mt-3 justify-end">
      <GithubIcon link={linkGithub} />
      <PreviewIcon link={linkPreview} />
    </div>
  );
};

export default Icons;
