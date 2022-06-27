import Head from "next/head";
import AboutContainer from "@/src/components/organisms/aboutContainer";

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

export default About;
