import { NextSeo } from "next-seo";
import { memo } from "react";
import Underline from "@/components/atoms/underline";
import Link from "next/link";

const Contact = () => {
  const link: string = "font-bold hover:text-textHover";

  return (
    <>
      <NextSeo title="Contact" />
      <section className=" h-screen tracking-wide">
        <div className="container pt-6 md:py-24 mx-auto object-center max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap justify-center items-center w-full mb-10">
            <div className="w-full flex justify-center items-center flex-col">
              <h1 className="text-3xl font-bold text-center">Contact</h1>
              <Underline />
            </div>
            <div className="flex justify-center mt-1 w-full sm:w-[90%] md:w-[70%] items-center flex-col">
              <p className="leading-relaxed font-normal text-center">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Contact);
