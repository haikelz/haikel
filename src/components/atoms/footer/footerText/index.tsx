import { today } from "@/src/utils/today";
import Link from "next/link";

const FooterText = () => {
  return (
    <>
      <p className="text-sm font-semibold pb-1">2020-{today.getFullYear()} Haikel.</p>
      <p className="text-sm font-semibold">
        This Website is under{" "}
        <Link href="https://github.com/haikelz/website/blob/master/LICENSE" passHref>
          <a className="font-bold hover:text-textHover">MIT License</a>
        </Link>
      </p>
    </>
  );
};

export default FooterText;
