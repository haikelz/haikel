import { cn } from "@/src/utils/className";
import { ProjectsList } from "./projectsList";
import { GrGithub } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";
import { List } from "./typeList";
import Image from "next/image";
import Link from "next/link";

const Projects = ({ setLoading, isLoading }: List) => {
  return (
    <>
      {ProjectsList.map((work) => (
        <div className="works_image xl:w-1/4 md:w-1/2 z-0 p-4" key={work.id}>
          <div className="overflow-hidden drop-shadow-xl rounded-lg bg-[#1f1d2e]">
            <Image
              alt="placeholder"
              width={"640px"}
              height={"426px"}
              loading="lazy"
              src={work.img}
              className={cn(
                "image rounded-t-lg h-full w-full object-cover object-center mb-6 hover:opacity-75 duration-700 ease-in-out",
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

              <p className="tracking-wide text-sm mb-2">{work.p}</p>

              <div className="flex mt-3">
                <p className="mr-2 px-1.5">{work.stack1}</p>
                <p className="px-1.5">{work.stack2}</p>
              </div>

              <div className="flex mt-3 justify-end">
                <Link href={work.repo} passHref>
                  <a>
                    <GrGithub className="hover:text-blue-400 duration-500 mr-2" />
                  </a>
                </Link>
                <Link href={work.preview} passHref>
                  <a>
                    <FiExternalLink className="hover:text-blue-500 duration-500" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;
