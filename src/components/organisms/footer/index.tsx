import { memo } from "react";
import FooterText from "@/src/components/atoms/footer/footerText";

const Footer = () => {
  return (
    <div className="body-font mb-16 hidden md:block md:mb-0 tracking-widest dark:bg-[#191724] bg-slate-50 dark:text-white pb-4 text-center">
      <FooterText />
    </div>
  );
};

export default memo(Footer);
