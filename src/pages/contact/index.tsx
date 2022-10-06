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
        <div className="container mx-auto max-w-7xl object-center px-4 pt-6 sm:px-6 md:py-24">
          <div className="mb-10 flex w-full flex-wrap items-center justify-center">
            <div className="flex w-full flex-col items-center justify-center">
              <h1 className="text-center text-3xl font-bold">Contact</h1>
              <Underline />
            </div>
            <div className="mt-1 flex w-full flex-col items-center justify-center sm:w-[90%] md:w-[70%]">
              <p className="text-center font-normal leading-relaxed">
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
