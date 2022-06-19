import { LazyMotion, m, domAnimation } from "framer-motion";
import dynamic from "next/dynamic";

const FooterText = dynamic(
  () => import("@/src/components/atoms/footer/footerText")
);

const Footer = () => {
  const today = new Date();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="body-font mb-16 hidden md:block md:mb-0 tracking-widest pb-4 text-center"
      >
        <FooterText />
      </m.div>
    </LazyMotion>
  );
};

export default Footer;
