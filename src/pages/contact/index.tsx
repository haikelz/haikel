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
      <section className="body-font h-screen tracking-wide">
        <ContactContainer />
      </section>
    </>
  );
};

export default memo(Contact);
