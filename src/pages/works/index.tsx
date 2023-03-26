import { GetStaticProps } from "next";
import { twJoin } from "tailwind-merge";
import { ListWorks } from "~ui/lists";
import { getAllWorks } from "~lib/helpers";
import { WorkMetaProps, WorksProps } from "~types";
import Layout from "~ui/layout";
import { Heading, Paragraph, Underline } from "~ui/typography";

export const getStaticProps: GetStaticProps = async () => {
  const works: WorkMetaProps[] = getAllWorks()
    .slice(0, getAllWorks().length)
    .map((work) => work.meta);

  return {
    props: {
      works,
    },
  };
};

const Works = ({ works }: WorksProps) => {
  return (
    <Layout
      title="Works"
      description="List some of my works"
      className={twJoin("flex min-h-screen flex-col items-start justify-start", "py-8", "md:py-12")}
    >
      <section className="flex w-full flex-wrap items-start justify-start">
        <div>
          <Heading as="h2" className="title-font text-left">
            Works
          </Heading>
          <Underline />
        </div>
        <div className="w-full leading-relaxed">
          <Paragraph>List some of my works</Paragraph>
        </div>
      </section>
      <section className="mt-6 mb-10 flex w-full flex-col space-y-8">
        <ListWorks works={works} />
      </section>
    </Layout>
  );
};

export default Works;
