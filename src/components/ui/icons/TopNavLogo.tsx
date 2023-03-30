import Link from "next/link";
import { cxm } from "~lib/helpers/cxm";
import { spaceGrotesk } from "~lib/utils/fonts";

export const TopNavLogo = () => {
  return (
    <div className="gradient dark:gradient-dark -rotate-6">
      <Link
        className={cxm(
          "cursor-pointer border-none text-xl font-bold",
          "tracking-widest outline-none",
          "transition-all ease-in-out",
          "hover:text-blue-500",
          spaceGrotesk.className
        )}
        href="/"
      >
        ハキム
      </Link>
    </div>
  );
};
