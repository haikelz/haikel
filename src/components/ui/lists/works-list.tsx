import { Works } from "contentlayer/generated";
import Link from "next/link";
import { match } from "ts-pattern";
import { tw } from "~lib/helpers";
import { inter } from "~lib/utils/fonts";
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
  HonoJsIcon,
  TrpcIcon,
  TypescriptIcon,
  WindiCssIcon,
} from "~ui/svgs";

import { Heading, Paragraph } from "../typography";

export function WorksList({ works }: { works: Works[] }) {
  return (
    <>
      {works.map((work, index) => (
        <Link
          href={`/${work.slug}`}
          aria-label={work.title}
          data-cy="work-item"
          key={index + 1}
          className={tw(
            "p-4 w-full bg-white dark:bg-base-0 group cursor-pointer flex flex-col",
            "flex-wrap border border-base-5 shadow-sm rounded-lg"
          )}
        >
          <div>
            <div className="w-fit">
              <Heading
                as="h3"
                className={tw("group-hover:text-blue-500", inter.className)}
              >
                {work.title}
              </Heading>
            </div>
            <Paragraph className="my-2 tracking-wide">
              {work.description}
            </Paragraph>
            <div className={tw("flex mt-3 space-x-2", inter.className)}>
              {work.stack.map((techstack, index) => (
                <div key={index + 1}>
                  {match({ techstack: techstack })
                    .with({ techstack: "nextjs" }, () => <NextJsIcon />)
                    .with({ techstack: "remix" }, () => <RemixIcon />)
                    .with({ techstack: "tailwind" }, () => <TailwindcssIcon />)
                    .with({ techstack: "react-query" }, () => (
                      <ReactQueryIcon />
                    ))
                    .with({ techstack: "honojs" }, () => <HonoJsIcon />)
                    .with({ techstack: "reactjs" }, () => <ReactIcon />)
                    .with({ techstack: "supabase" }, () => <SupabaseIcon />)
                    .with({ techstack: "typescript" }, () => <TypescriptIcon />)
                    .with({ techstack: "framer-motion" }, () => <FramerIcon />)
                    .with({ techstack: "swr" }, () => <SwrIcon />)
                    .with({ techstack: "nestjs" }, () => <NestJsIcon />)
                    .with({ techstack: "svelte" }, () => <SvelteIcon />)
                    .with({ techstack: "chakra-ui" }, () => <ChakrauiIcon />)
                    .with({ techstack: "windi" }, () => <WindiCssIcon />)
                    .with({ techstack: "trpc" }, () => <TrpcIcon />)
                    .with({ techstack: "jotai" }, () => <JotaiIcon />)
                    .otherwise(() => null)}
                </div>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
