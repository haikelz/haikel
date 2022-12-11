import { BackToTop } from "@/components/atoms/backToTop";
import BottomNav from "@/components/organisms/bottomNav";
import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
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
