import { Paragraph } from "@/components/atoms/paragraph";
import { Underline } from "@/components/atoms/underline";
import ListWorks from "@/components/organisms/listWorks";
import { NextSeo } from "next-seo";

const Works = () => {
  return (
    <>
      <NextSeo title="Works" description="List some of my works" />
      <section className="container mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 pt-6 pb-12 tracking-wide md:pt-24">
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
      </section>
    </>
  );
};

export default Works;
