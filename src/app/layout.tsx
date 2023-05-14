import NextTopLoader from "nextjs-toploader";
import { cxm } from "~lib/helpers/cxm";
import { ibmPlexSerif, jetbrains, naskhArabic, spaceGrotesk } from "~lib/utils/fonts";
import { ChildrenProps } from "~models";
import BottomNav from "~sections/BottomNav";
import Footer from "~sections/Footer";
import TopNav from "~sections/TopNav";
import "./globals.css";
import ProviderWrapper from "./providerWrapper";

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
        <NextTopLoader color="#F84B3E" showSpinner={false} />
        <ProviderWrapper>
          <div
            className={cxm(
              "min-h-screen w-full",
              "bg-azure bg-fixed bg-center text-base-0",
              "dark:bg-base-0 dark:text-gray-100"
            )}
          >
            <TopNav />
            <div className="px-4">{children}</div>
            <Footer />
            <BottomNav />
          </div>
        </ProviderWrapper>
      </body>
    </html>
  );
}
