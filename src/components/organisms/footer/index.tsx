import dynamic from "next/dynamic";

const FooterText = dynamic(
  () => import("@/src/components/atoms/footer/footerText")
);

const Footer = () => {
  const today = new Date();

  return (
    <div className="body-font mb-16 md:mb-0 tracking-widest pb-4 text-center">
      <FooterText />
    </div>
  );
};

export default Footer;
