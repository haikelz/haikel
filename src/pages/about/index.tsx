import { motion } from "framer-motion";
import Head from "next/head";
import AboutContainer from "@/src/components/organisms/aboutContainer";
import { sectionAnimation } from "@/src/utils/animation";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <motion.section
        {...sectionAnimation}
        className="body-font h-screen tracking-wide"
      >
        <AboutContainer />
      </motion.section>
    </>
  );
};

export default About;
