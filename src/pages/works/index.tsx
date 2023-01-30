import { twJoin } from "tailwind-merge";
import ListWorks from "~ui/lists/ListWorks";
import Layout from "~ui/templates/Layout";
import { Heading, Paragraph, Underline } from "~ui/typography";

const Works = () => {
  return (
    <Layout
      title="Works"
      description="List some of my works"
      className={twJoin(
        "flex min-h-screen flex-col items-center justify-start",
        "pt-6 pb-12 md:py-12"
      )}
    >
      <div className="mb-6 flex w-full flex-wrap items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Heading as="h2" className="text-center">
            Works
          </Heading>
          <Underline />
        </div>
        <div className="w-full text-center leading-relaxed">
          <Paragraph isCenter>List some of my works</Paragraph>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 grid-rows-1 gap-6 sm:grid-cols-2">
        <ListWorks />
      </div>
    </Layout>
  );
};

export default Works;
