import { components } from "@/src/props";
import GithubIcon from "@/src/components/atoms/works/iconCards/github";
import PreviewIcon from "@/src/components/atoms/works/iconCards/preview";

const Icons = ({ linkPreview, linkGithub }: components) => {
  return (
    <div className="flex mt-3 justify-end">
      <GithubIcon link={linkGithub} />
      <PreviewIcon link={linkPreview} />
    </div>
  );
};

export default Icons;
