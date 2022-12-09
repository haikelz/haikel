import { NextSeo } from "next-seo";
import { Underline } from "@/components/atoms/underline";
import ListWorks from "@/components/organisms/listWorks";
import { Paragraph } from "@/components/atoms/paragraph";

const Works = () => {
  return (
    <>
      <NextSeo title="Works" />
      <section className="mx-auto max-w-5xl px-4 md:pt-24 container min-h-screen tracking-wide flex flex-col items-center justify-center pt-6 pb-12">
        <div className="mb-10 flex items-center justify-center w-full flex-wrap">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center text-3xl font-bold">Works</h2>
            <Underline />
          </div>
          <div className="w-full text-center leading-relaxed">
            <Paragraph isCenter>List some of my works</Paragraph>
          </div>
        </div>
        <ListWorks />
      </section>
    </>
  );
};

export default Works;
