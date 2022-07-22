import { NextSeo } from "next-seo";
import HomeContainer from "@/src/components/organisms/homeContainer";

const Home = () => {
  return (
    <>
      <NextSeo title="Home" />
      <section className="body-font tracking-wide">
        <HomeContainer />
      </section>
    </>
  );
};

export default Home;
