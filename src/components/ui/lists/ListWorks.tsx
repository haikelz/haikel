import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { spaceGrotesk } from "~lib/utils/fonts";
import { WorkMetaProps } from "~models";
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
  WindiCssIcon,
} from "~ui/icons";
import { Paragraph } from "~ui/typography";
import { SwrIcon } from "../icons/SwrIcon";

export const ListWorks = ({ works }: { works: Array<WorkMetaProps> }) => {
  return (
    <>
      {works.map((work, index) => (
        <div key={index + 1} className="h-full">
          <div>
            <Link href={`/works/${work.slug}`} aria-label={work.title}>
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
                ) : techstack === "swr" ? (
                  <SwrIcon />
                ) : techstack === "svelte" ? (
                  <SvelteIcon />
                ) : techstack === "chakra-ui" ? (
                  <ChakrauiIcon />
                ) : techstack === "windi" ? (
                  <WindiCssIcon />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
