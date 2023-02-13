import Link from "next/link";
import { WorksProps } from "~types";
import ListWorks from "~ui/lists/ListWorks";
import { Heading, Underline, UnderlineSpan } from "~ui/typography";

const FeaturedWorks = ({ works }: WorksProps) => {
  return (
    <section className="mb-20 flex w-full flex-wrap items-center justify-center">
      <div className="mt-2 flex w-full flex-col items-center justify-center sm:mt-4">
        <div>
          <Heading as="h2" className="text-center">
            Featured Works
          </Heading>
          <Underline />
        </div>
        <div className="mt-6 grid w-full grid-cols-1 grid-rows-1 gap-5 sm:grid-cols-2">
          <ListWorks works={works} />
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
