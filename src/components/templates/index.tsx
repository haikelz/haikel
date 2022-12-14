import { BackToTop } from "@/components/atoms/BackToTop";
import BottomNav from "@/components/organisms/BottomNav";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import { ChildrenProps } from "@/types";

const Template = ({ children }: ChildrenProps) => {
  return (
    <div className="min-h-screen w-full bg-light bg-fixed bg-center dark:bg-dark dark:text-gray-100">
      <Header />
      {children}
      <BackToTop />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Template;
