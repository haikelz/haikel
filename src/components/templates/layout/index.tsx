import { ChildrenProps } from "@/types";
import { BackToTop } from "@/components/atoms/backToTop";
import Header from "@/components/organisms/header";
import BottomNav from "@/components/organisms/bottomNav";
import Footer from "@/components/organisms/footer";

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className="min-h-screen bg-fixed bg-center dark:bg-dark bg-light dark:text-gray-100 w-full">
      <Header />
      {children}
      <BackToTop />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Layout;
