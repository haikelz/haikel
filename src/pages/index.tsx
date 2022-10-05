import { NextSeo } from "next-seo";
import { memo } from "react";

const Home = () => {
  return (
    <>
      <NextSeo title="Haikel" />
      <div className=" tracking-wide">
        <div className="container mx-auto flex pt-10 md:py-24 max-w-7xl px-4 sm:px-6 items-center justify-center flex-col h-screen">
          <h1 className=" text-3xl mb-1 font-bold">Hello, I&#39;m Haikel 🌸</h1>
          <p className="mb-4 leading-relaxed">Frontend Enthusiast</p>
        </div>
      </div>
    </>
  );
};

export default memo(Home);
