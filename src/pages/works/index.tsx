import { motion } from "framer-motion";
import { sectionAnimation } from "@/src/utils/animation";
import Head from "next/head";
import WorksContainer from "@/src/components/organisms/worksContainer";

const Works = () => {
  return (
    <>
      <Head>
        <title>Works</title>
      </Head>
      <motion.section
        {...sectionAnimation}
        id="works"
        className="body-font tracking-wide"
      >
        <WorksContainer />
      </motion.section>
    </>
  );
};

export default Works;
