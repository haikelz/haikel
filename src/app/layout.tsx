import "@unocss/reset/tailwind.css";
import { Metadata } from "next";
import { tw } from "~lib/helpers";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import { ibmPlexMono, ibmPlexSans, ibmPlexSerif } from "~lib/utils/fonts";
import type { ChildrenProps } from "~types";
import Sidebar from "~ui/sidebar";

import "./globals.css";
import Wrapper from "./wrapper";

const baseMetadata = {
  title: "Haikel Ilham Hakim",
  description: "Frontend Web Developer",
  url: SITE_URL,
};

const { title, description, url } = baseMetadata;

export const metadata: Metadata = {
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
              "bg-azure flex flex-col-reverse md:flex-row text-base-0",
              "dark:bg-black dark:text-gray-100"
            )}
          >
            <Sidebar />
            <div className="w-full">
              <div className="px-4">{children}</div>
            </div>
          </div>
        </Wrapper>
      </body>
    </html>
  );
}
