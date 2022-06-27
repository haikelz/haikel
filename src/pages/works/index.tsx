import Head from "next/head";
import WorksContainer from "@/src/components/organisms/worksContainer";

const Works = () => {
  return (
    <>
      <Head>
        <title>Works</title>
      </Head>
      <section id="works" className="body-font tracking-wide">
        <WorksContainer />
      </section>
    </>
  );
};

export default Works;
