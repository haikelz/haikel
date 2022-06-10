import { components } from "@/src/types";
import dynamic from "next/dynamic";

const GithubIcon = dynamic(
  () => import("@/src/components/atoms/bottomNav/iconCards/github")
);

const PreviewIcon = dynamic(
  () => import("@/src/components/atoms/bottomNav/iconCards/preview")
);

const Icons = ({ linkPreview, linkGithub }: components) => {
  return (
    <div className="flex mt-3 justify-end">
      <GithubIcon link={linkPreview} />
      <PreviewIcon link={linkGithub} />
    </div>
  );
};

export default Icons;
