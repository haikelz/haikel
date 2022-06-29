import { motion } from "framer-motion";
import { homeAnimation } from "../utils/animation";
import Head from "next/head";
import HomeContainer from "@/src/components/organisms/homeContainer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <motion.section {...homeAnimation} className="body-font tracking-wide">
        <HomeContainer />
      </motion.section>
    </>
  );
};

export default Home;
