import Link from "next/link";
import { twJoin, twMerge } from "tailwind-merge";
import { projectsList } from "~lib/utils/data";
import { spaceGrotesk } from "~lib/utils/fonts";
import { GithubIcon, PreviewIcon } from "~ui/icons";
import { Heading, Paragraph, Underline, UnderlineSpan } from "~ui/typography";

const FeaturedWorks = () => {
  return (
    <section className="mb-20 flex w-full flex-wrap items-center justify-center">
      <div className="mt-2 flex w-full flex-col items-center justify-center sm:mt-4">
        <div>
          <Heading as="h2" className="text-center">
            Featured Works
          </Heading>
          <Underline />
        </div>
        <div className="mt-6 grid w-full grid-cols-1 grid-rows-1 gap-6 sm:grid-cols-2">
          {projectsList.slice(0, 4).map((work, index) => (
            <div
              className={twJoin(
                "cursor-pointer overflow-hidden border-[2.5px]",
                "border-black bg-azure transition-all ease-in-out",
                "hover:shadow-light active:scale-95",
                "dark:border-white dark:bg-raisinblack dark:hover:shadow-dark"
              )}
              key={index + 1}
            >
              <div className="px-6 pb-6 pt-3">
                <div className="my-2">
                  <span className={twMerge("text-xl font-bold", spaceGrotesk.className)}>
                    {work.title}
                  </span>
                </div>
                <Paragraph className="mb-2" isCenter={false}>
                  {work.description}
                </Paragraph>
                <div className={twMerge("mt-3 flex space-x-2 font-medium", spaceGrotesk.className)}>
                  {work.stack.map((techstack, index) => (
                    <span
                      key={index + 1}
                      className={twJoin(
                        "bg-celedongreen px-1.5 text-sm text-white",
                        "dark:bg-lightgray dark:text-slate-900"
                      )}
                    >
                      {techstack}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex justify-end">
                  <GithubIcon link={work.repo} />
                  <PreviewIcon link={work.preview} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex w-full items-end justify-end">
          <Link role="button" href="/works" className="w-fit text-right" aria-label="More Works">
            <UnderlineSpan>See more works</UnderlineSpan>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
