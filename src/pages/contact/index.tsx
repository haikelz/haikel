import dynamic from "next/dynamic";
import Head from "next/head";

const ContactDesc = dynamic(
  () => import("@/src/components/atoms/contact/contactText/contactDesc")
);

const ContactTitle = dynamic(
  () => import("@/src/components/atoms/contact/contactText/contactTitle")
);

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <section className="body-font h-screen tracking-wide">
        <div className="container pt-10 md:py-24 mx-auto object-center max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap justify-center items-center w-full mb-10">
            <ContactTitle />
            <ContactDesc />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
