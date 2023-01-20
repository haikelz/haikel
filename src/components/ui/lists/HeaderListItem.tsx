import { headerList } from "@/lib/utils/data";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { twJoin } from "tailwind-merge";

const HeaderListItem = () => {
  const router: NextRouter = useRouter();

  return (
    <>
      {headerList.map((nav) => (
        <Link
          className={twJoin(
            "undeline cursor-pointer rounded-sm",
            "font-grotesk text-base font-semibold duration-200 active:bg-yellow-300 active:dark:bg-slate-800",
            router.asPath === nav.href
              ? "gradient underline decoration-[#0093E9] decoration-dashed underline-offset-[5px] duration-200 active:bg-yellow-300"
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

export default HeaderListItem;
