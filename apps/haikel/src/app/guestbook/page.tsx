import Main from "~components/main";
import { tw } from "~lib/helpers";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";

import GuestbookClient from "./client";

const baseMetadata = {
  title: "Guestbook",
  description: "Write a message for me and others",
  url: `${SITE_URL}/guestbook`,
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
    siteName: "haikel.app",
    images: [
      {
        url: DEFAULT_OG_URL,
        alt: "OG Image",
      },
    ],
  },
  twitter: {
    title,
    description,
    site: url,
    card: "summary_large_image",
  },
  metadataBase: new URL(url),
};

export default async function Guestbook() {
  return (
    <Main className={tw("flex min-h-screen flex-col items-start justify-start", "py-8")}>
      <GuestbookClient />
    </Main>
  );
}
