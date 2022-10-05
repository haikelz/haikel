import { NextSeo } from "next-seo";
import { memo } from "react";
import Underline from "@/components/atoms/underline";
import GridCards from "@/components/organisms/gridCards";

const Works = () => {
  return (
    <>
      <NextSeo title="Works" />
      <div className="min-h-screen tracking-wide">
        <div className="container flex justify-center items-center flex-col pt-6 pb-24 md:py-24 mx-auto object-center max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap w-full mb-10">
            <div className="w-full flex justify-center items-center flex-col">
              <h1 className="text-3xl font-bold text-center">Works</h1>
              <Underline />
            </div>
            <p className="w-full leading-relaxed text-center">List some of my works</p>
          </div>
          <div className="flex flex-wrap">
            <GridCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Works);
