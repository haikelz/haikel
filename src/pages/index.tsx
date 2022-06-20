import { domAnimation, LazyMotion, m } from "framer-motion";
import { memo } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const HomeContainer = dynamic(
  () => import("@/src/components/organisms/homeContainer")
);

const Index = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <LazyMotion features={domAnimation}>
        <m.section
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="body-font tracking-wide"
        >
          <HomeContainer />
        </m.section>
      </LazyMotion>
    </>
  );
};

export default memo(Index);
