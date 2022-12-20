import { LayoutProps } from "@/types";
import { Seo } from "@/atoms/Seo";

const Layout = ({ children, className, title, description }: LayoutProps) => {
  return (
    <>
      <Seo title={title} description={description} />
      <section className={`container mx-auto max-w-5xl px-4 tracking-wide ${className}`}>
        {children}
      </section>
    </>
  );
};

export default Layout;
