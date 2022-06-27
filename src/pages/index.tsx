import { memo } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const HomeContainer = dynamic(
  () => import("@/src/components/organisms/homeContainer")
);

const Index = () => {
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

export default memo(Index);
