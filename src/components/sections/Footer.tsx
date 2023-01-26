import { currentYear } from "@/lib/helpers/date";
import { spaceGrotesk } from "@/lib/utils/fonts";
import { UnderlineSpan } from "@/ui/typography";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Footer = () => {
  return (
    <footer className={twMerge("pb-4 text-center tracking-widest md:mb-0", spaceGrotesk.className)}>
      <div>
        <p className="pb-1 text-sm font-semibold">2020-{currentYear} Haikel</p>
        <p className="text-sm font-semibold">
          This Website is under{" "}
          <Link href="https://github.com/haikelz/website/blob/master/LICENSE" passHref>
            <UnderlineSpan>MIT License</UnderlineSpan>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
