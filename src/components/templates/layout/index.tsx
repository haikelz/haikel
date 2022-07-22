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
      <div className="dark:bg-[#191724] dark:text-white bg-slate-50">
        <Header />
        {children}
        <Footer />
        <BottomNav />
      </div>
    </>
  );
};

export default Layout;
