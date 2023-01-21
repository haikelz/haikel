import { topNavList } from "@/lib/utils/data";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { twJoin } from "tailwind-merge";

const TopNavListItem = () => {
  const router: NextRouter = useRouter();

  return (
    <>
      {topNavList.map((nav) => (
        <Link
          className={twJoin(
            "undeline cursor-pointer rounded-sm",
            "px-1 font-grotesk text-base font-semibold active:bg-pink-100 active:dark:bg-slate-800",
            router.asPath === nav.href
              ? "gradient underline decoration-[#0093E9] decoration-dashed underline-offset-[5px]"
              : ""
          )}
          href={nav.href}
          key={nav.id}
          passHref
        >
          {nav.text}
        </Link>
      ))}
    </>
  );
};

export default TopNavListItem;
