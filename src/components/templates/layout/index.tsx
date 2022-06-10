import { components } from "@/src/types";
import dynamic from "next/dynamic";
import Head from "next/head";

const Header = dynamic(() => import("@/src/components/organisms/header"));
const Footer = dynamic(() => import("@/src/components/organisms/footer"));
const BottomNav = dynamic(() => import("@/src/components/organisms/bottomNav"));

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
