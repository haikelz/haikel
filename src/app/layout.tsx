import { cxm } from "~lib/helpers";
import { ibmPlexSerif, jetbrains, naskhArabic, spaceGrotesk } from "~lib/utils/fonts";
import { ChildrenProps } from "~models";
import Footer from "~ui/footer";
import Navbar from "~ui/navbar";

import "./globals.css";
import Wrapper from "./wrapper";

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html
      lang="en"
      className={cxm(
        jetbrains.variable,
        spaceGrotesk.variable,
        naskhArabic.variable,
        ibmPlexSerif.variable
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
