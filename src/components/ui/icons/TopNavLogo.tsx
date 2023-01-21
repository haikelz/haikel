import Link from "next/link";

export const TopNavLogo = () => {
  return (
    <div className="gradient -rotate-6">
      <Link
        className="cursor-pointer border-none font-japanese text-xl font-bold tracking-widest outline-none transition-all ease-in-out hover:text-blue-600"
        href="/"
        passHref
      >
        ハキム
      </Link>
    </div>
  );
};
