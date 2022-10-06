import { NextSeo } from "next-seo";
import { memo } from "react";
import Underline from "@/components/atoms/underline";
import GridCards from "@/components/organisms/gridCards";

const Works = () => {
  return (
    <>
      <NextSeo title="Works" />
      <div className="min-h-screen tracking-wide">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center object-center px-4 pt-6 pb-24 sm:px-6 md:py-24">
          <div className="mb-10 flex w-full flex-wrap">
            <div className="flex w-full flex-col items-center justify-center">
              <h1 className="text-center text-3xl font-bold">Works</h1>
              <Underline />
            </div>
            <p className="w-full text-center leading-relaxed">List some of my works</p>
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
