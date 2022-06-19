import { LazyMotion, m, domAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import Head from "next/head";

const AboutContainer = dynamic(
  () => import("@/src/components/organisms/aboutContainer")
);

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <LazyMotion features={domAnimation}>
        <m.section
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="body-font h-screen tracking-wide"
        >
          <AboutContainer />
        </m.section>
      </LazyMotion>
    </>
  );
};

export default About;
