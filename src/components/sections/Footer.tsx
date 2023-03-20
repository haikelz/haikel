import Link from "next/link";
import { twJoin } from "tailwind-merge";
import { currentYear } from "~lib/helpers/date";
import { spaceGrotesk } from "~lib/utils/fonts";

const Footer = () => {
  return (
    <footer
      className={twJoin("pb-[4.8rem] text-center tracking-widest md:pb-4", spaceGrotesk.className)}
    >
      <div>
        <p className="pb-1 text-sm font-semibold">2020-{currentYear} Haikel</p>
        <p className="text-sm font-semibold">
          Typed by me in{" "}
          <Link href="https://id.wikipedia.org/wiki/Kepulauan_Bangka_Belitung">
            <span
              className={twJoin(
                "cursor-pointer font-bold",
                "text-sm underline decoration-dashed underline-offset-[5px]",
                "hover:text-blue-500 hover:decoration-blue-500"
              )}
            >
              Bangka Belitung
            </span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
