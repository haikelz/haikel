import { WorksProps } from "~types";
import ListWorks from "~ui/lists/ListWorks";
import { Heading, Underline, UnderlineLink } from "~ui/typography";

const FeaturedWorks = ({ works }: WorksProps) => {
  return (
    <section className="mb-12 flex w-full flex-wrap items-center justify-center">
      <div className="flex w-full flex-col items-start justify-start">
        <div>
          <Heading as="h2">Featured Works</Heading>
          <Underline />
        </div>
        <div className="mt-6 mb-8 flex w-full flex-col space-y-8">
          <ListWorks works={works} />
        </div>
        <div className="flex w-full items-end justify-start">
          <UnderlineLink href="/works" role="button" aria-label="More Works">
            See more works
          </UnderlineLink>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
