import BottomNav from "@/sections/BottomNav";
import Footer from "@/sections/Footer";
import TopNav from "@/sections/TopNav";
import { ChildrenProps } from "@/types";
import { twJoin } from "tailwind-merge";

const Template = ({ children }: ChildrenProps) => {
  return (
    <div
      className={twJoin(
        "min-h-screen w-full bg-azure bg-fixed bg-center",
        "dark:bg-eerieblack dark:text-gray-100"
      )}
    >
      <TopNav />
      {children}
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Template;
