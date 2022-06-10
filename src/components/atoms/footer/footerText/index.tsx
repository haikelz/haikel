import Link from "next/link";

const FooterText = () => {
  const today = new Date();
  return (
    <>
      <p className="text-xs pb-1">©2020-{today.getFullYear()} Haikel.</p>
      <p className="text-xs">
        Built with{" "}
        <Link href="https://nextjs.org" passHref>
          <a className="font-bold hover:underline">NextJS</a>
        </Link>
        , Hosted on{" "}
        <Link href="https://pages.cloudflare.com/" passHref>
          <a className="hover:underline font-bold">Cloudflare</a>
        </Link>
      </p>
    </>
  );
};

export default FooterText;
