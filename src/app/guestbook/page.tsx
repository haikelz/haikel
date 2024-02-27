import { Metadata } from "next";
import { Session, getServerSession } from "next-auth";
import { options } from "~app/api/auth/[...nextauth]/options";
import Main from "~components/main";
import TransitionLayout from "~components/transition-layout";
import { tw } from "~lib/helpers";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import { Heading, Paragraph } from "~ui/typography";

import { FormAndGuestsList, SignOut } from "./client";

const baseMetadata = {
  title: "Guestbook",
  description: "Write a message for me and others",
  url: `${SITE_URL}/guestbook`,
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
  const session = (await getServerSession(options)) as Session;

  return (
    <Main
      className={tw(
        "flex min-h-screen flex-col items-start justify-start",
        "pt-8"
      )}
    >
      <section className="flex w-full flex-wrap items-start justify-start">
        <TransitionLayout
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full mb-10"
        >
          <div>
            <Heading as="h1" className="text-left mb-2">
              Guestbook
            </Heading>
            <Paragraph data-cy="description">
              Write a message for me and others.
              {session ? (
                <span>
                  {" "}
                  Want to Sign Out instead? Just click <SignOut />
                </span>
              ) : null}
            </Paragraph>
          </div>
          <FormAndGuestsList session={session} />
        </TransitionLayout>
      </section>
    </Main>
  );
}
