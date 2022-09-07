import { memo } from "react";
import { today } from "@/src/utils/today";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-16 hidden md:block tracking-widest md:mb-0 pb-4 text-center">
      <p className="text-sm font-semibold pb-1">2020-{today.getFullYear()} Haikel</p>
      <p className="text-sm font-semibold">
        This Website is under{" "}
        <Link href="https://github.com/haikelz/website/blob/master/LICENSE" passHref>
          <a className="font-bold hover:text-textHover">MIT License</a>
        </Link>
      </p>
    </div>
  );
};

export default memo(Footer);
