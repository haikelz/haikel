import { HeaderList } from "@/utils/data";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

const HeaderListItem = () => {
  const router: NextRouter = useRouter();

  return (
    <>
      {HeaderList.map((nav) => (
        <Link
          className={`headerlist rounded-sm px-3 py-1.5 text-base font-semibold duration-200 active:bg-slate-300 active:dark:bg-slate-800 ${
            router.asPath === nav.href && "underline underline-offset-2"
          } cursor-pointer`}
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
