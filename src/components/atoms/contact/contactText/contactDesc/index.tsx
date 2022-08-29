import Link from "next/link";

const ContactDesc = () => {
  const link: string = "font-bold hover:text-textHover";

  return (
    <div className="flex justify-center mt-1 w-full sm:w-[90%] md:w-[70%]  items-center flex-col">
      <p className="leading-relaxed text-center">
        Feel free to reach me via{" "}
        <Link href="https://t.me/pempek_kapal_selem" passHref>
          <a className={link}>Telegram</a>
        </Link>
        ,{" "}
        <Link href="https://facebook.com/kelgfx" passHref>
          <a className={link}>Facebook</a>
        </Link>
        {", "}
        <Link href="https://github.com/haikelz" passHref>
          <a className={link}>Github</a>
        </Link>
        {", and "}
        <Link href="https://www.linkedin.com/in/haikel-ilham-hakim/" passHref>
          <a className={link}>Linkedin</a>
        </Link>
      </p>
    </div>
  );
};

export default ContactDesc;
