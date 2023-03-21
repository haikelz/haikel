import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { spaceGrotesk } from "~lib/utils/fonts";
import { WorksProps } from "~types";
import {
  ChakrauiIcon,
  FramerIcon,
  NextJsIcon,
  ReactIcon,
  ReactQueryIcon,
  SupabaseIcon,
  SvelteIcon,
  TailwindcssIcon,
  TypescriptIcon,
} from "~ui/icons";
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
                  <NextJsIcon />
                ) : techstack === "tailwind" ? (
                  <TailwindcssIcon />
                ) : techstack === "react-query" ? (
                  <ReactQueryIcon />
                ) : techstack === "reactjs" ? (
                  <ReactIcon />
                ) : techstack === "supabase" ? (
                  <SupabaseIcon />
                ) : techstack === "typescript" ? (
                  <TypescriptIcon />
                ) : techstack === "framer-motion" ? (
                  <FramerIcon />
                ) : techstack === "svelte" ? (
                  <SvelteIcon />
                ) : techstack === "chakra-ui" ? (
                  <ChakrauiIcon />
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
