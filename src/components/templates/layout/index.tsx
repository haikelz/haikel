import { Components } from "@/src/interfaces";
import Header from "@/components/organisms/header";
import BottomNav from "@/components/organisms/bottomNav";
import Footer from "@/components/organisms/footer";
import BackToTop from "@/components/atoms/backToTop";

const Layout = ({ children }: Components) => {
  return (
    <section className="dark:bg-dark dark:text-white bg-light min-h-screen">
      <Header />
      {children}
      <BackToTop />
      <Footer />
      <BottomNav />
    </section>
  );
};

export default Layout;
