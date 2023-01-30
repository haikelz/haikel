import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import { topNavList } from "~lib/utils/data";
import { spaceGrotesk } from "~lib/utils/fonts";

const TopNavListItem = () => {
  const router: NextRouter = useRouter();

  return (
    <>
      {topNavList.map((nav) => (
        <Link
          className={twMerge(
            "cursor-pointer rounded-sm",
            "px-1 text-base font-semibold active:bg-pink-100 active:dark:bg-slate-800",
            router.asPath === nav.href
              ? "gradient underline decoration-[#0093E9] decoration-dashed underline-offset-[5px]"
              : "",
            spaceGrotesk.className
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
