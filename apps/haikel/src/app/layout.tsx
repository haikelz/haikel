import Footer from "~components/footer";
import Navbar from "~components/navbar";
import { tw } from "~lib/helpers";
import { ibmPlexMono, ibmPlexSans, ibmPlexSerif, naskhArabic } from "~lib/utils/fonts";
import type { ChildrenProps } from "~types";

import "./globals.css";
import Wrapper from "./wrapper";

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html
      lang="en"
      className={tw(
        naskhArabic.variable,
        ibmPlexSerif.variable,
        ibmPlexSans.variable,
        ibmPlexMono.variable
      )}
    >
      <body>
        <Wrapper>
          <div
            className={tw(
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
