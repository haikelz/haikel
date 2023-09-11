import { Works } from "contentlayer/generated";
import Link from "next/link";
import { tw } from "~lib/helpers";
import { ibmPlexSans } from "~lib/utils/fonts";
import {
  ChakrauiIcon,
  FramerIcon,
  JotaiIcon,
  NestJsIcon,
  NextJsIcon,
  ReactIcon,
  ReactQueryIcon,
  RemixIcon,
  SupabaseIcon,
  SvelteIcon,
  SwrIcon,
  TailwindcssIcon,
  TrpcIcon,
  TypescriptIcon,
  WindiCssIcon,
} from "~ui/svgs";

import { Paragraph } from "../typography";

export function WorksList({ works }: { works: Works[] }) {
  return (
    <>
      {works.map((work, index) => (
        <div id="work-item" key={index + 1} className="h-full">
          <div>
            <Link href={`/${work.slug}`} aria-label={work.title}>
              <span
                className={tw("text-xl font-bold", "hover:text-blue-500", ibmPlexSans.className)}
              >
                {work.title}
              </span>
            </Link>
          </div>
          <Paragraph className="my-2 tracking-wide">{work.description}</Paragraph>
          <div className={tw("flex space-x-2", ibmPlexSans.className)}>
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
                ) : techstack === "trpc" ? (
                  <TrpcIcon />
                ) : techstack === "jotai" ? (
                  <JotaiIcon />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
