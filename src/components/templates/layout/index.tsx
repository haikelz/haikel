import { components } from "@/src/types";
import Head from "next/head";
import Header from "@/src/components/organisms/header";
import Footer from "@/src/components/organisms/footer";
import BottomNav from "@/src/components/organisms/bottomNav";

const Layout = ({ children }: components) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
      <BottomNav />
    </>
  );
};

export default Layout;
