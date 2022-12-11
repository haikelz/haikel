import { Paragraph } from "@/components/atoms/paragraph";
import { Underline } from "@/components/atoms/underline";
import ListWorks from "@/components/organisms/listWorks";
import Layout from "@/components/templates/layout";
import { NextSeo } from "next-seo";

const Works = () => {
  return (
    <>
      <NextSeo title="Works" description="List some of my works" />
      <Layout className="flex min-h-screen flex-col items-center justify-center pt-6 pb-12 md:pt-24">
        <div className="mb-10 flex w-full flex-wrap items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center text-3xl font-bold">Works</h2>
            <Underline />
          </div>
          <div className="w-full text-center leading-relaxed">
            <Paragraph isCenter>List some of my works</Paragraph>
          </div>
        </div>
        <ListWorks />
      </Layout>
    </>
  );
};

export default Works;
