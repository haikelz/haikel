import Head from "next/head";
import { lazy } from "react";

const HomeGreeting = lazy(
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
