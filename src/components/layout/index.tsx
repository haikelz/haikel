import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import Head from "next/head";
import BottomNav from "../bottomNav";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://avatars.githubusercontent.com/u/77146709?v=4"
        />
      </Head>
      <Header />
      {children}
      <Footer />
      <BottomNav />
    </>
  );
};

export default Layout;
