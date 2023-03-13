import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { currentYear } from "~lib/helpers/date";
import { spaceGrotesk } from "~lib/utils/fonts";
import { UnderlineSpan } from "~ui/typography";

const Footer = () => {
  return (
    <footer
      className={twMerge("pb-[4.8rem] text-center tracking-widest md:pb-4", spaceGrotesk.className)}
    >
      <div>
        <p className="pb-1 text-sm font-semibold">2020-{currentYear} Haikel</p>
        <p className="text-sm font-semibold">
          Typed by me in{" "}
          <Link href="https://id.wikipedia.org/wiki/Kepulauan_Bangka_Belitung">
            <UnderlineSpan>Bangka Belitung</UnderlineSpan>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
