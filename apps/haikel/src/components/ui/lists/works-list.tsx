import Link from "next/link";
import { WorkMetaProps } from "~interfaces";
import { cxm } from "~lib/helpers";
import { ibmPlexSans } from "~lib/utils/fonts";
import {
  ChakrauiIcon,
  FramerIcon,
  NestJsIcon,
  NextJsIcon,
  ReactIcon,
  ReactQueryIcon,
  RemixIcon,
  SupabaseIcon,
  SvelteIcon,
  SwrIcon,
  TailwindcssIcon,
  TypescriptIcon,
  WindiCssIcon,
} from "~ui/svgs";

import { Paragraph } from "../typography";

export function WorksList({ works }: { works: WorkMetaProps[] }) {
  return (
    <>
      {works.map((work, index) => (
        <div key={index + 1} className="h-full">
          <div>
            <Link href={`/works/${work.slug}`} aria-label={work.title}>
              <span
                className={cxm("text-xl font-bold", "hover:text-blue-500", ibmPlexSans.className)}
              >
                {work.title}
              </span>
            </Link>
          </div>
          <Paragraph className="my-2 tracking-wide">{work.description}</Paragraph>
          <div className={cxm("flex space-x-2", ibmPlexSans.className)}>
            {work.stack.map((techstack, index) => (
              <div key={index + 1}>
                {techstack === "nextjs" ? (
                  <NextJsIcon />
                ) : techstack === "remix" ? (
                  <RemixIcon />
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
                ) : techstack === "nestjs" ? (
                  <NestJsIcon />
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
}