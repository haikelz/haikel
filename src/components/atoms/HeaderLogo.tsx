import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <div className="gradient -rotate-6">
      <Link
        className="cursor-pointer border-none font-japanese text-xl font-bold tracking-widest outline-none duration-300 hover:text-blue-600"
        href="/"
        passHref
      >
        ハキム
      </Link>
    </div>
  );
};
