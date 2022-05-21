import { NavMobileList } from "./navList";
import Link from "next/link";

const NavMobile = () => {
  return (
    <>
      {NavMobileList.map((nav) => (
        <Link href={nav.href} key={nav.id} passHref>
          <p className="cursor-pointer hover:bg-[#2a273f] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            {nav.text}
          </p>
        </Link>
      ))}
    </>
  );
};

export default NavMobile;
