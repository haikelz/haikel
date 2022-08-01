import Link from "next/link";

const FooterText = () => {
  const today = new Date();
  return (
    <>
      <p className="text-sm pb-1">2020-{today.getFullYear()} Haikel.</p>
      <p className="text-sm">
        Built with{" "}
        <Link href="https://nextjs.org" passHref>
          <a className="font-bold hover:underline hover:underline-offset-2">
            NextJS
          </a>
        </Link>
        , Hosted on{" "}
        <Link href="https://pages.cloudflare.com/" passHref>
          <a className="font-bold hover:underline hover:underline-offset-2">
            Cloudflare
          </a>
        </Link>
      </p>
    </>
  );
};

export default FooterText;
