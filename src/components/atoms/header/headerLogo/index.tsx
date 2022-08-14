import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href="/" passHref>
      <h1 className="logo cursor-pointer font-bold tracking-widest border-none outline-none hover:text-blue-600 duration-300">
        Haikel
      </h1>
    </Link>
  );
};

export default HeaderLogo;
