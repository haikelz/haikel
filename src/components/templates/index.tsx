import BottomNav from "@/sections/BottomNav";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import { ChildrenProps } from "@/types";
import { twJoin } from "tailwind-merge";

const Template = ({ children }: ChildrenProps) => {
  return (
    <div
      className={twJoin(
        "min-h-screen w-full bg-brightgray bg-fixed bg-center",
        "dark:bg-eerieblack dark:text-gray-100"
      )}
    >
      <Header />
      {children}
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Template;
