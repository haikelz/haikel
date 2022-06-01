import Link from "next/link";

const Footer = () => {
  const today = new Date();

  return (
    <div className="body-font mb-16 md:mb-0 tracking-widest pb-4 text-center">
      <p className="text-xs pb-1">©2020-{today.getFullYear()} Haikel.</p>
      <p className="text-xs">
        Built with{" "}
        <Link href="https://nextjs.org" passHref>
          <span className="cursor-pointer font-bold hover:underline">
            NextJS
          </span>
        </Link>
        , Hosted on{" "}
        <Link href="https://pages.cloudflare.com/" passHref>
          <span className="cursor-pointer hover:underline font-bold">
            Cloudflare
          </span>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
