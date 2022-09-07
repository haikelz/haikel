import { Components } from "@/src/interfaces";
import GithubIcon from "@/src/components/atoms/iconCards/github";
import PreviewIcon from "@/src/components/atoms/iconCards/preview";

const Icons = ({ linkPreview, linkGithub }: Components) => {
  return (
    <div className="flex mt-3 justify-end">
      <GithubIcon link={linkGithub} />
      <PreviewIcon link={linkPreview} />
    </div>
  );
};

export default Icons;
