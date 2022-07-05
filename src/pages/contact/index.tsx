import { motion } from "framer-motion";
import { sectionAnimation } from "@/src/utils/animation";
import Head from "next/head";
import ContactContainer from "@/src/components/organisms/contactContainer";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <motion.section
        {...sectionAnimation}
        className="body-font h-screen tracking-wide"
      >
        <ContactContainer />
      </motion.section>
    </>
  );
};

export default Contact;
