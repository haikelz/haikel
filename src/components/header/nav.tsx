import { NavList } from "./navList";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      {NavList.map((nav) => (
        <Link href={nav.href} key={nav.id} passHref>
          <a className="duration-500 px-3 py-2 rounded-sm font-semibold hover:underline cursor-pointer">
            {nav.text}
          </a>
        </Link>
      ))}
    </>
  );
};

export default Nav;
