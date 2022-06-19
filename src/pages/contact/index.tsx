import { LazyMotion, m, domAnimation } from "framer-motion";
import { memo } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const ContactContainer = dynamic(
  () => import("@/src/components/organisms/contactContainer")
);

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <LazyMotion features={domAnimation}>
        <m.section
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="body-font h-screen tracking-wide"
        >
          <ContactContainer />
        </m.section>
      </LazyMotion>
    </>
  );
};

export default memo(Contact);
