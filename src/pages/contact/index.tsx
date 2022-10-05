import { NextSeo } from "next-seo";
import { memo } from "react";
import { socialMediaList } from "@/src/utils/data";
import Underline from "@/components/atoms/underline";
import Link from "next/link";

const Contact = () => {
  const link: string = "font-bold hover:text-textHover";

  return (
    <>
      <NextSeo title="Contact" />
      <div className=" h-screen tracking-wide">
        <div className="container pt-6 md:py-24 mx-auto object-center max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap justify-center items-center w-full mb-10">
            <div className="w-full flex justify-center items-center flex-col">
              <h1 className="text-3xl font-bold text-center">Contact</h1>
              <Underline />
            </div>
            <div className="flex justify-center mt-1 w-full sm:w-[90%] md:w-[70%] items-center flex-col">
              <p className="leading-relaxed font-normal text-center">
                Feel free to reach me via{" "}
                {socialMediaList.map((item, index) => (
                  <>
                    <Link key={index + 1} href={item.link} passHref>
                      <a className={link}>{item.name}</a>
                    </Link>
                    {item.name === "Telegram" || item.name === "Facebook"
                      ? ", "
                      : item.name === "Github"
                      ? ", and "
                      : ""}
                  </>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Contact);
