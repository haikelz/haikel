import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link className="logo" href="/" passHref>
      <p className="cursor-pointer border-none font-bold tracking-widest outline-none duration-300 hover:text-blue-600">
        Haikel
      </p>
    </Link>
  );
};
