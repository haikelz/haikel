import Link from "next/link";
import { twJoin, twMerge } from "tailwind-merge";
import { spaceGrotesk } from "~lib/utils/fonts";
import { WorksProps } from "~types";
import { Paragraph } from "~ui/typography";

const ListWorks = ({ works }: WorksProps) => {
  return (
    <>
      {works.map((work, index) => (
        <div key={index + 1} className="h-full">
          <div>
            <Link href={`/works/${work.slug}`} passHref aria-label={work.title}>
              <span
                className={twMerge(
                  "text-xl font-bold",
                  "hover:text-crayola",
                  spaceGrotesk.className
                )}
              >
                {work.title}
              </span>
            </Link>
          </div>
          <Paragraph className="my-2 tracking-wide">{work.description}</Paragraph>
          <div className={twMerge("flex space-x-2", spaceGrotesk.className)}>
            {work.stack.map((techstack, index) => (
              <span
                key={index + 1}
                className={twJoin(
                  "cursor-pointer rounded-sm border-2 border-gray-300 px-1 font-medium",
                  "dark:border-gray-500",
                  "hover:text-crayola hover:decoration-crayola"
                )}
              >
                {techstack}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ListWorks;
