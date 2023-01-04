import { Paragraph } from "@/atoms/Paragraph";
import Icons from "@/molecules/Icons";
import { projectsList } from "@/utils/data";
import clsx from "clsx";

const ListWorks = () => {
  return (
    <>
      {projectsList.map((work, index) => (
        <div
          className={clsx(
            "cursor-pointer overflow-hidden border-[2.5px] border-black",
            "bg-antiflashwhite transition-all ease-in-out hover:shadow-light active:scale-95",
            "dark:border-white dark:bg-raisinblack dark:hover:shadow-dark"
          )}
          key={index + 1}
        >
          <div className="px-6 pb-6 pt-3">
            <h4 className="mt-2 mb-2 text-xl font-bold">{work.h4}</h4>
            <Paragraph className="mb-2" isCenter={false}>
              {work.p}
            </Paragraph>
            <div className="mt-3 flex gap-2 font-medium">
              <span
                className={clsx(
                  "bg-celedongreen px-1.5 text-sm text-white",
                  "dark:bg-lightgray dark:text-slate-900"
                )}
              >
                {work.stack1}
              </span>
              <span
                className={clsx(
                  "bg-celedongreen px-1.5 text-sm text-white",
                  "dark:bg-lightgray dark:text-slate-900"
                )}
              >
                {work.stack2}
              </span>
            </div>
            <Icons linkGithub={work.repo} linkPreview={work.preview} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ListWorks;
