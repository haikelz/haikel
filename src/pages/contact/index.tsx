import Underline from "@/src/components/underline";
import Head from "next/head";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <section className="body-font h-screen tracking-wide">
        <div className="container py-24 sm:py-24 mx-auto object-center max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap justify-center items-center w-full mb-10">
            <div className="w-full mb-1 lg:mb-0 flex justify-center items-center flex-col">
              <h1 className="sm:text-3xl text-3xl font-bold title-font mb-1 text-center">
                Contact
              </h1>
              <Underline />
            </div>
            <div className="mt-2 sm:mt-4 flex justify-center items-center flex-col">
              <p className="text-md leading-relaxed sm:ml-4 mt-3 sm:mt-0 text-center">
                You can reach me on{" "}
                <Link href="https://haikelz.me/posts" passHref>
                  <span className="text-[#2563eb] font-bold hover:text-blue-700 duration-500 cursor-pointer">
                    Github
                  </span>
                </Link>
                {", "}
                <Link href="https://t.me/pempek_kapal_selem" passHref>
                  <span className="text-[#2563eb] font-bold hover:text-blue-700 duration-500 cursor-pointer">
                    Telegram
                  </span>
                </Link>
                {", and "}
                <Link href="https://facebook.com/kelgfx" passHref>
                  <span className="text-[#2563eb] font-bold hover:text-blue-700 duration-500 cursor-pointer">
                    Facebook
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
