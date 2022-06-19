import Link from "next/link";

const ContactDesc = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-md leading-relaxed text-center">
        You can find me on{" "}
        <Link href="https://github.com/haikelz" passHref>
          <span className="underline font-bold hover:text-blue-700">
            Github
          </span>
        </Link>
        {", "}
        <Link href="https://t.me/pempek_kapal_selem" passHref>
          <span className="underline font-bold hover:text-blue-700">
            Telegram
          </span>
        </Link>
        {", and "}
        <Link href="https://facebook.com/kelgfx" passHref>
          <span className="underline font-bold hover:text-blue-700">
            Facebook
          </span>
        </Link>
      </p>
    </div>
  );
};

export default ContactDesc;
