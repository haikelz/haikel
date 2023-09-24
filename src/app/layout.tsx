import "@unocss/reset/tailwind.css";
import Footer from "~components/footer";
import Navbar from "~components/navbar";
import { tw } from "~lib/helpers";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import { ibmPlexMono, ibmPlexSans, ibmPlexSerif } from "~lib/utils/fonts";
import type { ChildrenProps } from "~types";

import "./globals.css";
import Wrapper from "./wrapper";

const baseMetadata = {
  title: "Haikel Ilham Hakim",
  description: "Frontend Web Developer",
  url: SITE_URL,
};

const { title, description, url } = baseMetadata;

export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url,
    title,
    description,
    images: [
      {
        url: DEFAULT_OG_URL,
        alt: "OG Image",
      },
    ],
    siteName: "haikel.app",
  },
  twitter: {
    title,
    description,
    site: url,
    card: "summary_large_image",
  },
  metadataBase: new URL(url),
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html
      lang="en"
      className={tw(ibmPlexSerif.variable, ibmPlexSans.variable, ibmPlexMono.variable)}
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
