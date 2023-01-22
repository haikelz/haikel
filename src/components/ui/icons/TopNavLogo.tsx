import Link from "next/link";
import { twJoin } from "tailwind-merge";

export const TopNavLogo = () => {
  return (
    <div className="gradient -rotate-6">
      <Link
        className={twJoin(
          "cursor-pointer border-none font-japanese text-xl font-bold",
          "tracking-widest outline-none",
          "transition-all ease-in-out hover:text-blue-600"
        )}
        href="/"
        passHref
      >
        ハキム
      </Link>
    </div>
  );
};
