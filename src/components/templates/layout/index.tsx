import { Components } from "@/src/interfaces";
import Head from "next/head";
import Header from "@/components/organisms/header";
import BottomNav from "@/components/organisms/bottomNav";
import Footer from "@/components/organisms/footer";
import BackToTop from "@/components/atoms/backToTop";

const Layout = ({ children }: Components) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="dark:bg-dark dark:text-white bg-light min-h-screen">
        <Header />
        {children}
        <BackToTop />
        <Footer />
        <BottomNav />
      </div>
    </>
  );
};

export default Layout;
