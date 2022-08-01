import { Components } from "@/src/interfaces";
import Head from "next/head";
import Header from "@/src/components/organisms/header";
import BottomNav from "@/src/components/organisms/bottomNav";
import Footer from "@/src/components/organisms/footer";

const Layout = ({ children }: Components) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="dark:bg-dark dark:text-white bg-light">
        <Header />
        {children}
        <Footer />
        <BottomNav />
      </div>
    </>
  );
};

export default Layout;
