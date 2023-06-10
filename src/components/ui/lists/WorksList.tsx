import Link from "next/link";
import { cxm } from "~lib/helpers";
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
  SwrIcon,
  TailwindcssIcon,
  TypescriptIcon,
  WindiCssIcon,
} from "~ui/svg";
import { Paragraph } from "~ui/typography";

export function WorksList({ works }: { works: WorkMetaProps[] }) {
  return (
    <>
      {works.map((work, index) => (
        <div key={index + 1} className="h-full">
          <div>
            <Link href={`/works/${work.slug}`} aria-label={work.title}>
              <span
                className={cxm("text-xl font-bold", "hover:text-blue-500", spaceGrotesk.className)}
              >
                {work.title}
              </span>
            </Link>
          </div>
          <Paragraph className="my-2 tracking-wide">{work.description}</Paragraph>
          <div className={cxm("flex space-x-2", spaceGrotesk.className)}>
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
}
