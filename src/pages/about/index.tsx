import { memo } from "react";
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
      <section className="body-font h-screen tracking-wide">
        <AboutContainer />
      </section>
    </>
  );
};

export default memo(About);
