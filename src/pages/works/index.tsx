import dynamic from "next/dynamic";
import Head from "next/head";

const GridCards = dynamic(() => import("@/src/components/organisms/gridCards"));

const WorksTitle = dynamic(
  () => import("@/src/components/atoms/works/worksText/worksTitle")
);

const WorksDesc = dynamic(
  () => import("@/src/components/atoms/works/worksText/worksDesc")
);

const Works = () => {
  return (
    <>
      <Head>
        <title>Works</title>
      </Head>
      <section id="works" className="body-font tracking-wide">
        <div className="container py-10 md:py-24 mx-auto object-center max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap w-full mb-10">
            <WorksTitle />
            <WorksDesc />
          </div>
          <div className="flex flex-wrap -m-4">
            <GridCards />
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
