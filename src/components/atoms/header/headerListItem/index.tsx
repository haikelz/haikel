import { List } from "./list";
import Link from "next/link";

const HeaderListItem = () => {
  return (
    <>
      {List.map((nav) => (
        <Link href={nav.href} key={nav.id} passHref>
          <p className="duration-200 active:bg-slate-300 active:dark:bg-slate-800 px-3 py-1.5 rounded-sm font-semibold hover:underline cursor-pointer">
            {nav.text}
          </p>
        </Link>
      ))}
    </>
  );
};

export default HeaderListItem;
