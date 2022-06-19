import Link from "next/link";

const ContactDesc = () => {
  return (
    <div className="flex justify-center mt-1 items-center flex-col">
      <p className="text-md leading-relaxed text-center">
        You can find me on{" "}
        <Link href="https://github.com/haikelz" passHref>
          <a className="underline font-bold hover:text-blue-700">Github</a>
        </Link>
        {", "}
        <Link href="https://t.me/pempek_kapal_selem" passHref>
          <a className="underline font-bold hover:text-blue-700">Telegram</a>
        </Link>
        {", and "}
        <Link href="https://facebook.com/kelgfx" passHref>
          <a className="underline font-bold hover:text-blue-700">Facebook</a>
        </Link>
      </p>
    </div>
  );
};

export default ContactDesc;
