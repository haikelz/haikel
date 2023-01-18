import { headerList } from "@/libs/utils/data";
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
            "undeline cursor-pointer rounded-sm px-3 py-1.5",
            "text-base font-semibold duration-200 active:bg-pink-100 active:dark:bg-slate-800",
            router.asPath === nav.href
              ? "gradient underline decoration-[#0093E9] decoration-dashed underline-offset-[5px] duration-200 active:bg-slate-300"
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
