import { NextSeo } from "next-seo";
import ContactContainer from "@/src/components/organisms/contactContainer";

const Contact = () => {
  return (
    <>
      <NextSeo title="Contact" />
      <section className="body-font h-screen tracking-wide">
        <ContactContainer />
      </section>
    </>
  );
};

export default Contact;
