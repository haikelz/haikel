import { NextSeo } from "next-seo";
import { ProjectsList } from "@/utils/data";
import { memo } from "react";
import Underline from "@/components/atoms/underline";
import Icons from "@/components/moleculs/icons";

const Works = () => {
  return (
    <>
      <NextSeo title="Works" />
      <section id="works" className="min-h-screen tracking-wide">
        <div className="container flex justify-center items-center flex-col pt-6 pb-24 md:py-24 mx-auto object-center max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap w-full mb-10">
            <div className="w-full flex justify-center items-center flex-col">
              <h1 className="text-3xl font-bold text-center">Works</h1>
              <Underline />
            </div>
            <p className="w-full leading-relaxed text-center">List some of my works</p>
          </div>
          <div className="flex flex-wrap">
            <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">
              {ProjectsList.map((work, index) => (
                <div
                  className="overflow-hidden dark:hover:shadow-light hover:shadow-dark duration-200 transition-all border-2 cursor-pointer border-black dark:border-white bg-lightCard dark:bg-darkCard"
                  key={index + 1}
                >
                  <div className="px-6 pb-6 pt-3">
                    <h2 className="text-xl font-bold  mt-2 mb-2">{work.h2}</h2>
                    <p className="tracking-wide mb-2">{work.p}</p>
                    <div className="flex gap-2 font-medium mt-3">
                      <span className="px-1.5 text-sm text-white dark:text-slate-900 bg-lightTag dark:bg-darkTag">
                        {work.stack1}
                      </span>
                      <span className="px-1.5 text-white dark:text-slate-900 text-sm bg-lightTag dark:bg-darkTag">
                        {work.stack2}
                      </span>
                    </div>
                    <Icons linkGithub={work.repo} linkPreview={work.preview} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Works);
