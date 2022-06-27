import Head from "next/head";
import ContactContainer from "@/src/components/organisms/contactContainer";

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

export default Contact;
