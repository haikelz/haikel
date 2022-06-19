import { ProjectsList } from "./projectsList";
import { LazyMotion, m, domAnimation } from "framer-motion";
import Icons from "@/src/components/moleculs/works/icons";

const GridCards = () => {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        <LazyMotion features={domAnimation}>
          {ProjectsList.map((work, index) => (
            <m.div
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden border-2 cursor-pointer border-black dark:border-white rounded-lg bg-slate-100 dark:bg-[#1f1d2e]"
              key={index + 1}
            >
              <div className="px-6 pb-6 pt-3">
                <h2 className="text-lg font-bold title-font mt-2 mb-2">
                  {work.h2}
                </h2>

                <p className="tracking-wide mb-2">{work.p}</p>

                <div className="flex mt-3">
                  <span className="mr-2 px-1.5 text-sm text-white dark:text-slate-900 bg-[#247881] dark:bg-[#d1d9d0]">
                    {work.stack1}
                  </span>
                  <span className="px-1.5 text-white dark:text-slate-900 text-sm bg-[#247881] dark:bg-[#d1d9d0]">
                    {work.stack2}
                  </span>
                </div>

                <Icons linkGithub={work.repo} linkPreview={work.preview} />
              </div>
            </m.div>
          ))}
        </LazyMotion>
      </div>
    </>
  );
};

export default GridCards;
