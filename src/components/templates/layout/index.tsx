import { components } from "@/src/types";
import Head from "next/head";
import Header from "@/src/components/organisms/header";
import BottomNav from "@/src/components/organisms/bottomNav";

const Layout = ({ children }: components) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}

      <BottomNav />
    </>
  );
};

export default Layout;
