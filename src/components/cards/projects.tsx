import { cn } from "@/src/class/className";
import { ProjectsList } from "./projectsList";
import { GrGithub } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";
import { List } from "./typeList";
import Image from "next/image";

const Projects = ({ setLoading, isLoading }: List) => {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {ProjectsList.map((work) => (
          <div
            className="overflow-hidden shadow-lg rounded-lg bg-slate-100 dark:bg-[#1f1d2e]"
            key={work.id}
          >
            <Image
              alt="placeholder"
              width={"640px"}
              height={"426px"}
              priority
              src={work.img}
              className={cn(
                "cursor-pointer rounded-t-lg h-full w-full object-cover object-center mb-6 hover:opacity-75 duration-700 ease-in-out",
                isLoading
                  ? "grayscale blur-2xl scale-110"
                  : "grayscale-0 blur-0 scale-100"
              )}
              onLoadingComplete={() => setLoading(false)}
            />

            <div className="px-6 pb-6">
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

              <div className="flex mt-3 justify-end">
                <a href={work.repo}>
                  <span>
                    <GrGithub className="hover:text-blue-400 duration-500 mr-2 cursor-pointer" />
                  </span>
                </a>
                <a href={work.preview}>
                  <span>
                    <FiExternalLink className="hover:text-blue-500 duration-500 cursor-pointer" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
