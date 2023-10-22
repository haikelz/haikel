import { Metadata } from "next";
import { Session, getServerSession } from "next-auth";
import { options } from "~app/api/auth/[...nextauth]/options";
import Main from "~components/main";
import { tw } from "~lib/helpers";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import { Heading, Paragraph, Underline } from "~ui/typography";

import { ConfirmDeleteModal, FormAndGuestsList, SignOut } from "./client";

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
  const session: Session | null = await getServerSession(options);

  return (
    <>
      <Main className={tw("flex min-h-screen flex-col items-start justify-start", "py-8")}>
        <section className="flex w-full flex-wrap items-start justify-start">
          <div>
            <Heading as="h2" className="text-left">
              Guestbook
            </Heading>
            <Underline />
          </div>
          <div className="w-full leading-relaxed">
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
        </section>
        <FormAndGuestsList session={session} />
      </Main>
      <ConfirmDeleteModal />
    </>
  );
}
