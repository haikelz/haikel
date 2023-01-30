import { twJoin } from "tailwind-merge";
import { ibmPlexSerif, jetbrains, spaceGrotesk } from "~lib/utils/fonts";
import BottomNav from "~sections/BottomNav";
import Footer from "~sections/Footer";
import TopNav from "~sections/TopNav";
import { ChildrenProps } from "~types";

const Template = ({ children }: ChildrenProps) => {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${ibmPlexSerif.style.fontFamily};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${spaceGrotesk.style.fontFamily};
        }

        .prose pre,
        pre code {
          font-family: ${jetbrains.style.fontFamily};
        }
      `}</style>
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
    </>
  );
};

export default Template;
