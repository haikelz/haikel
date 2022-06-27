import { components } from "@/src/props";
import Head from "next/head";
import Header from "@/src/components/organisms/header";
import BottomNav from "@/src/components/organisms/bottomNav";
import Footer from "@/src/components/organisms/footer";

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
