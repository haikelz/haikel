import { LazyMotion, m, domAnimation } from "framer-motion";
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
      <LazyMotion features={domAnimation}>
        <m.section
          transition={{ duration: 0.5, delay: 0.1 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          id="works"
          className="body-font tracking-wide"
        >
          <WorksContainer />
        </m.section>
      </LazyMotion>
    </>
  );
};

export default memo(Works);
