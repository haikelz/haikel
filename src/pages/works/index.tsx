import { NextSeo } from "next-seo";
import { useKeydown } from "@/hooks/useKeydown";
import { Underline } from "@/components/atoms/underline";
import ListWorks from "@/components/organisms/listWorks";

const Works = () => {
  useKeydown({ isCtrlKey: true, previousUrl: "/about", nextUrl: "/notes" });

  return (
    <>
      <NextSeo title="Works" />
      <section className="container min-h-screen tracking-wide mx-auto flex max-w-5xl flex-col items-center justify-center object-center px-4 pt-6 pb-24 sm:px-6 md:py-24">
        <div className="mb-10 flex items-center justify-center w-full flex-wrap">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-3xl font-bold">Works</h1>
            <Underline />
          </div>
          <p className="w-full text-center leading-relaxed">List some of my works</p>
        </div>
        <div className="flex flex-wrap">
          <ListWorks />
        </div>
      </section>
    </>
  );
};

export default Works;
