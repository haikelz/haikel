import { Paragraph } from "@/components/atoms/paragraph";
import Icons from "@/components/molecules/icons";
import { ProjectsList } from "@/utils/data";

const ListWorks = () => {
  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 gap-6 sm:grid-cols-2">
      {ProjectsList.map((work, index) => (
        <div
          className="cursor-pointer overflow-hidden border-[2.5px] border-black bg-card-light transition-all duration-200 hover:shadow-dark active:scale-95 dark:border-white dark:bg-card-dark dark:hover:shadow-light"
          key={index + 1}
        >
          <div className="px-6 pb-6 pt-3">
            <h4 className="mt-2 mb-2 text-xl font-bold">{work.h4}</h4>
            <Paragraph className="mb-2" isCenter={false}>
              {work.p}
            </Paragraph>
            <div className="mt-3 flex gap-2 font-medium">
              <span className="bg-tag-light px-1.5 text-sm text-white dark:bg-tag-dark dark:text-slate-900">
                {work.stack1}
              </span>
              <span className="bg-tag-light px-1.5 text-sm text-white dark:bg-tag-dark dark:text-slate-900">
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

export default ListWorks;
