import Seo from "@/atoms/Seo";
import { LayoutProps } from "@/types";
import { twMerge } from "tailwind-merge";

const Layout = ({ children, className, title, description }: LayoutProps) => {
  return (
    <>
      <Seo title={title} description={description} />
      <section className={twMerge("container mx-auto max-w-5xl px-4 tracking-wide", className)}>
        {children}
      </section>
    </>
  );
};

export default Layout;
