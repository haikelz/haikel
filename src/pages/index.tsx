import Head from "next/head";
import HomeGreeting from "../components/moleculs/homeGreeting";

const Index = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeGreeting />
    </>
  );
};

export default Index;
