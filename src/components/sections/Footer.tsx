import { currentYear } from "@/lib/helpers/date";
import { spaceGrotesk } from "@/lib/helpers/fonts";
import Link from "next/link";
import { twJoin, twMerge } from "tailwind-merge";

const Footer = () => {
  return (
    <footer className={twMerge("pb-4 text-center tracking-widest md:mb-0", spaceGrotesk.className)}>
      <div>
        <p className="pb-1 text-sm font-semibold">2020-{currentYear} Haikel</p>
        <p className="text-sm font-semibold">
          This Website is under{" "}
          <Link
            href="https://github.com/haikelz/website/blob/master/LICENSE"
            className={twJoin(
              "font-bold underline decoration-black decoration-dashed underline-offset-[5px]",
              "hover:text-crayola hover:decoration-crayola",
              "dark:decoration-white dark:hover:decoration-crayola"
            )}
            passHref
          >
            MIT License
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
