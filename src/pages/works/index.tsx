import { NextSeo } from "next-seo";
import WorksContainer from "@/src/components/organisms/worksContainer";

const Works = () => {
  return (
    <>
      <NextSeo title="Works" />
      <section id="works" className="body-font tracking-wide">
        <WorksContainer />
      </section>
    </>
  );
};

export default Works;
