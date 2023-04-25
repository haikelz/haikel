import { format } from "date-fns";
import Link from "next/link";
import { cxm } from "~lib/helpers/cxm";
import { spaceGrotesk } from "~lib/utils/fonts";

export default function Footer() {
  const currentYear = format(new Date(), "yyyy");

  return (
    <footer
      className={cxm(
        "flex w-full flex-col items-center justify-center",
        "px-4 pb-[4.5rem] text-center tracking-widest",
        "md:py-0",
        spaceGrotesk.className
      )}
    >
      <div
        className={cxm(
          "w-full max-w-3xl md:border-t md:border-t-gray-300",
          "md:py-3 md:dark:border-t-gray-500"
        )}
      >
        <p className="text-center text-base font-semibold md:text-left">
          2020-{currentYear} Haikel. <br className="block md:hidden" /> See the source code on{" "}
          <Link
            className={cxm(
              "cursor-pointer font-bold",
              "text-sm underline decoration-dashed underline-offset-[5px]",
              "hover:text-blue-500 hover:decoration-blue-500"
            )}
            href="https://github.com/haikelz/haikel.my.id/"
          >
            Github
          </Link>
        </p>
      </div>
    </footer>
  );
}
