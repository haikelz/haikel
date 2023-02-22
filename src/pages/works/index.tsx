import { GetStaticProps } from "next";
import { twJoin } from "tailwind-merge";
import { getAllWorks } from "~lib/helpers/getAllWorks";
import { WorkMetaProps, WorksProps } from "~types";
import Layout from "~ui/layout";
import ListWorks from "~ui/lists/ListWorks";
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
      className={twJoin(
        "flex min-h-screen flex-col items-center justify-start",
        "py-8",
        "md:py-12"
      )}
    >
      <div className="flex w-full flex-wrap items-start justify-start">
        <div>
          <Heading as="h2" className="title-font text-left">
            Works
          </Heading>
          <Underline />
        </div>
        <div className="w-full leading-relaxed">
          <Paragraph>List some of my works</Paragraph>
        </div>
      </div>
      <div className="mt-6 mb-10 flex w-full flex-col space-y-8">
        <ListWorks works={works} />
      </div>
    </Layout>
  );
};

export default Works;
