import { cxm } from "~lib/helpers/cxm";
import { getAllWorks } from "~lib/services";
import { WorkMetaProps } from "~models";
import Seo from "~ui/Seo";
import { ListWorks } from "~ui/lists";
import { Heading, Paragraph, Underline } from "~ui/typography";

export default function Works() {
  const works: WorkMetaProps[] = getAllWorks()
    .slice(0, getAllWorks().length)
    .map((work) => work.meta);

  return (
    <Seo
      title="Works"
      description="List some of my works"
      className={cxm("flex min-h-screen flex-col items-start justify-start", "py-8", "md:py-12")}
    >
      <section className="flex w-full flex-wrap items-start justify-start">
        <div>
          <Heading as="h2" className="text-left">
            Works
          </Heading>
          <Underline />
        </div>
        <div className="w-full leading-relaxed">
          <Paragraph>List some of my works</Paragraph>
        </div>
      </section>
      <section className="mb-10 mt-6 flex w-full flex-col space-y-8">
        <ListWorks works={works} />
      </section>
    </Seo>
  );
}
