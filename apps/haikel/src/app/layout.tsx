import { ChildrenProps } from "~interfaces";
import { cxm } from "~lib/helpers";
import { ibmPlexMono, ibmPlexSans, ibmPlexSerif, naskhArabic } from "~lib/utils/fonts";
import Footer from "~ui/footer";
import Navbar from "~ui/navbar";

import "./globals.css";
import Wrapper from "./wrapper";

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html
      lang="en"
      className={cxm(
        naskhArabic.variable,
        ibmPlexSerif.variable,
        ibmPlexSans.variable,
        ibmPlexMono.variable
      )}
    >
      <body>
        <Wrapper>
          <div
            className={cxm(
              "min-h-screen w-full",
              "bg-azure text-base-0",
              "dark:bg-black dark:text-gray-100"
            )}
          >
            <Navbar />
            <div className="px-4">{children}</div>
            <Footer />
          </div>
        </Wrapper>
      </body>
    </html>
  );
}
