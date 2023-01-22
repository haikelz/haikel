import { currentYear } from "@/lib/helpers/date";
import Link from "next/link";
import { twJoin } from "tailwind-merge";

const Footer = () => {
  return (
    <footer className="pb-4 text-center font-grotesk tracking-widest md:mb-0">
      <div>
        <p className="pb-1 text-sm font-semibold">2020-{currentYear} Haikel</p>
        <p className="text-sm font-semibold">
          This Website is under{" "}
          <Link
            href="https://github.com/haikelz/website/blob/master/LICENSE"
            className={twJoin(
              "font-bold underline decoration-black decoration-dashed",
              "underline-offset-[5px] hover:text-crayola hover:decoration-crayola",
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
