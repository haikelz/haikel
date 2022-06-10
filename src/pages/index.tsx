import dynamic from "next/dynamic";
import Head from "next/head";

const HomeGreeting = dynamic(
  () => import("@/src/components/moleculs/homeGreeting")
);

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
