import { Children } from "@/src/interfaces";
import Header from "@/components/organisms/header";
import BottomNav from "@/components/organisms/bottomNav";
import Footer from "@/components/organisms/footer";
import BackToTop from "@/components/atoms/backToTop";

const Layout = ({ children }: Children) => {
  return (
    <div className="min-h-screen bg-light dark:bg-dark dark:text-white">
      <Header />
      {children}
      <BackToTop />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Layout;
