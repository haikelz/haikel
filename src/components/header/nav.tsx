import Link from "next/link";
import { NavList } from "./navList";

const Nav = () => {
  return (
    <>
      {NavList.map((nav) => (
        <Link href={nav.href} key={nav.id} passHref>
          <p className="duration-500 px-3 py-2 rounded-sm font-semibold hover:underline cursor-pointer">
            {nav.text}
          </p>
        </Link>
      ))}
    </>
  );
};

export default Nav;
