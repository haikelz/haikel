import { memo } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const WorksContainer = dynamic(
  () => import("@/src/components/organisms/worksContainer")
);

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

export default memo(Works);
