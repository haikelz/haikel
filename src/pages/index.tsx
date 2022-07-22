import Head from "next/head";
import HomeContainer from "@/src/components/organisms/homeContainer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className="body-font tracking-wide">
        <HomeContainer />
      </section>
    </>
  );
};

export default Home;
