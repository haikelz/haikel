import { year } from "@/helpers/year";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-16 hidden pb-4 text-center tracking-widest md:mb-0 md:block">
      <p className="pb-1 text-sm font-semibold">2020-{year} Haikel</p>
      <p className="text-sm font-semibold">
        This Website is under{" "}
        <Link
          href="https://github.com/haikelz/website/blob/master/LICENSE"
          className="font-bold hover:text-textHover"
          passHref
        >
          MIT License
        </Link>
      </p>
    </div>
  );
};

export default Footer;
