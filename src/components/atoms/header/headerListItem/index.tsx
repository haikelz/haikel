import { List } from "./list";
import Link from "next/link";

const HeaderListItem = () => {
  return (
    <>
      {List.map((nav) => (
        <Link href={nav.href} key={nav.id} passHref>
          <p className="duration-200 active:bg-slate-300 hover:dark:bg-slate-800 target:bg-slate-300 px-3 py-2 rounded-sm font-semibold hover:underline cursor-pointer">
            {nav.text}
          </p>
        </Link>
      ))}
    </>
  );
};

export default HeaderListItem;
