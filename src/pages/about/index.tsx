import { NextSeo } from "next-seo";
import AboutContainer from "@/src/components/organisms/aboutContainer";

const About = () => {
  return (
    <>
      <NextSeo title="About" />
      <section className="body-font h-screen tracking-wide">
        <AboutContainer />
      </section>
    </>
  );
};

export default About;
