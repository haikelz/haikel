import { components } from "@/src/types";
import Head from "next/head";
import Header from "@/src/components/organisms/header";
import Footer from "@/src/components/organisms/footer";
import BottomNav from "@/src/components/organisms/bottomNav";
import { LazyMotion, m, domAnimation } from "framer-motion";

const Layout = ({ children }: components) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LazyMotion features={domAnimation}>
        <m.div
          transition={{ duration: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {children}
          <Footer />
        </m.div>
      </LazyMotion>
      <BottomNav />
    </>
  );
};

export default Layout;
