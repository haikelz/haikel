import { GithubIcon } from "@/atoms/GithubIcon";
import { PreviewIcon } from "@/atoms/PreviewIcon";
import { LinkIconProps } from "@/types";

const Icons = ({ linkPreview, linkGithub }: LinkIconProps) => {
  return (
    <div className="mt-3 flex justify-end">
      <GithubIcon link={linkGithub} />
      <PreviewIcon link={linkPreview} />
    </div>
  );
};

export default Icons;
