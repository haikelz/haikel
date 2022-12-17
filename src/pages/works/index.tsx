import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { Underline } from "@/components/atoms/Underline";
import ListWorks from "@/components/organisms/ListWorks";
import Layout from "@/components/templates/Layout";

const Works = () => {
  return (
    <Layout
      title="Works"
      description="List some of my works"
      className="flex min-h-screen flex-col items-center justify-center pt-6 pb-12 md:pt-24"
    >
      <div className="mb-10 flex w-full flex-wrap items-center justify-center">
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
      <ListWorks />
    </Layout>
  );
};

export default Works;
