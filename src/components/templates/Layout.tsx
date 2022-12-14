import { LayoutProps } from "@/types";

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <section className={`container mx-auto max-w-5xl px-4 tracking-wide ${className}`}>
      {children}
    </section>
  );
};

export default Layout;
