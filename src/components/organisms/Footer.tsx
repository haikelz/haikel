import { currentYear } from "@/helpers/date";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="pb-4 text-center tracking-widest md:mb-0">
      <div>
        <p className="pb-1 text-sm font-semibold">2020-{currentYear} Haikel</p>
        <p className="text-sm font-semibold">
          This Website is under{" "}
          <Link
            href="https://github.com/haikelz/website/blob/master/LICENSE"
            className="font-bold hover:text-texthover"
            passHref
          >
            MIT License
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Footer;
