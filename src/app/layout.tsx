import type { ChildrenProps } from "@types";
import "@unocss/reset/tailwind.css";
import { Metadata, Viewport } from "next";
import Footer from "~components/footer";
import Header from "~components/header";
import { tw } from "~lib/helpers";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import { ibmPlexMono, inter } from "~lib/utils/fonts";

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
    siteName: "ekel.dev",
  },
  twitter: {
    title,
    description,
    site: url,
    card: "summary_large_image",
  },
  metadataBase: new URL(url),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" className={tw(inter.variable, ibmPlexMono.variable)}>
      <body>
        <Wrapper>
          <div
            className={tw(
              "min-h-screen w-full",
              "text-base-0",
              "dark:text-base-5 bg"
            )}
          >
            <Header />
            <div className="w-full pt-12 sm:pt-14">
              <div className="px-4">{children}</div>
            </div>
            <Footer />
          </div>
        </Wrapper>
      </body>
    </html>
  );
}
