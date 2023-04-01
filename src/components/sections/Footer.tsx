import Link from "next/link";
import { cxm } from "~lib/helpers/cxm";
import { spaceGrotesk } from "~lib/utils/fonts";

const date: Date = new Date();
const currentYear: number = date.getFullYear();

export function Footer() {
  return (
    <footer
      className={cxm("pb-[4.8rem] text-center tracking-widest md:pb-4", spaceGrotesk.className)}
    >
      <div>
        <p className="pb-1 text-base font-semibold">2020-{currentYear} Haikel</p>
        <p className="text-base font-semibold">
          This Website is under{" "}
          <Link
            className={cxm(
              "cursor-pointer font-bold",
              "text-sm underline decoration-dashed underline-offset-[5px]",
              "hover:text-blue-500 hover:decoration-blue-500"
            )}
            href="https://github.com/haikelz/haikel.my.id/blob/master/LICENSE"
          >
            MIT License
          </Link>
        </p>
      </div>
    </footer>
  );
}
