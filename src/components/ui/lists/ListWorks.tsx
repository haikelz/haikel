import Link from "next/link";
import {
  SiChakraui,
  SiFramer,
  SiNextdotjs,
  SiReact,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { twMerge } from "tailwind-merge";
import { spaceGrotesk } from "~lib/utils/fonts";
import { WorksProps } from "~types";
import { Paragraph } from "~ui/typography";
import { ReactQueryIcon, SupabaseIcon } from "../icons";

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
                  "hover:text-blue-500",
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
              <div key={index + 1}>
                {techstack === "nextjs" ? (
                  <SiNextdotjs />
                ) : techstack === "tailwind" ? (
                  <SiTailwindcss className="text-gray-400" />
                ) : techstack === "react-query" ? (
                  <ReactQueryIcon />
                ) : techstack === "reactjs" ? (
                  <SiReact className="text-blue-400" />
                ) : techstack === "supabase" ? (
                  <SupabaseIcon />
                ) : techstack === "typescript" ? (
                  <SiTypescript className="text-sky-600" />
                ) : techstack === "framer-motion" ? (
                  <SiFramer />
                ) : techstack === "svelte" ? (
                  <SiSvelte className="text-orange-500" />
                ) : techstack === "chakra-ui" ? (
                  <SiChakraui className="text-teal-500" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ListWorks;
