import { ProjectsList } from "@/utils/data";
import { memo } from "react";
import Icons from "@/components/molecules/icons";

const GridCards = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {ProjectsList.map((work, index) => (
        <div
          className="cursor-pointer overflow-hidden border-[2.5px] border-black bg-lightCard transition-all duration-200 hover:shadow-dark active:scale-95 dark:border-white dark:bg-darkCard dark:hover:shadow-light"
          key={index + 1}
        >
          <div className="px-6 pb-6 pt-3">
            <h4 className="mt-2 mb-2 text-xl font-bold">{work.h4}</h4>
            <p className="mb-2 tracking-wide">{work.p}</p>
            <div className="mt-3 flex gap-2 font-medium">
              <span className="bg-lightTag px-1.5 text-sm text-white dark:bg-darkTag dark:text-slate-900">
                {work.stack1}
              </span>
              <span className="bg-lightTag px-1.5 text-sm text-white dark:bg-darkTag dark:text-slate-900">
                {work.stack2}
              </span>
            </div>
            <Icons linkGithub={work.repo} linkPreview={work.preview} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(GridCards);
