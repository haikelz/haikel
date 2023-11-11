import { Notes, Works } from "contentlayer/generated";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  LucideIcon,
  MailIcon,
  RssIcon,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Greeting from "~components/greeting";
import Main from "~components/main";
import { tw } from "~lib/helpers";
import { sortedAllNotes, sortedAllWorks } from "~lib/services";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import { NotesList, WorksList } from "~ui/lists";
import { Heading, Paragraph, Underline, UnderlineLink } from "~ui/typography";

const socialMediaList = [
  { id: 1, icon: MailIcon, route: "mailto:halo@haikel.app" },
  { id: 2, icon: RssIcon, route: "https://haikel.app/rss.xml" },
  { id: 3, icon: FacebookIcon, route: "https://facebook.com/kelgfx" },
  { id: 4, icon: InstagramIcon, route: "https://instagram.com/ekel.tsx" },
  { id: 5, icon: GithubIcon, route: "https://github.com/haikelz" },
  {
    id: 6,
    icon: LinkedinIcon,
    route: "https://www.linkedin.com/in/haikel",
  },
];

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

export default async function HomePage() {
  const notes: Notes[] = sortedAllNotes.slice(0, 4);
  const works: Works[] = sortedAllWorks.slice(0, 4);

  return (
    <Main className={tw("flex flex-col items-start justify-start", "py-8")}>
      <section className="mb-12 flex w-full flex-wrap items-center justify-center">
        <div
          className={tw(
            "flex w-full flex-col items-start justify-start",
            "md:flex-row"
          )}
        >
          <div
            className={tw(
              "flex flex-col items-start justify-start",
              "md:mt-0 md:text-start"
            )}
          >
            <Greeting />
            <Paragraph id="description" className="my-4">
              Someone who interested in Frontend stuff, with mainly focuses on
              building responsive, interactive, maintainable, and accessible
              Websites. Familiar with Javascript/Typescript, React Ecosystem,
              Linux(for daily use) and sometimes i do backend things with Nest
              JS. Always try to follow best practices as much as i can. I can
              work in a team or solo. I love clean and minimal design. Look at
              some of my works and notes below.
            </Paragraph>
            <ul className="flex items-center justify-center space-x-4">
              {socialMediaList.map((item) => {
                const Icon: LucideIcon = item.icon;
                return (
                  <li
                    className="transition-all hover:-translate-y-0.5"
                    key={item.id}
                  >
                    <Link href={item.route} target="_blank">
                      <button
                        type="button"
                        className={tw(
                          "rounded-sm",
                          "p-1",
                          "hover:bg-gray-200",
                          "active:bg-gray-300",
                          "dark:hover:bg-base-2 dark:active:bg-base-1"
                        )}
                        aria-label={`Icon ${item.id.toString()}`}
                      >
                        <Icon size={20} />
                      </button>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <section className="mb-12 flex w-full flex-wrap items-center justify-center">
        <div className="flex w-full flex-col items-start justify-start">
          <div>
            <Heading as="h2">Featured Works</Heading>
            <Underline />
          </div>
          <div className="mb-8 mt-6 flex w-full flex-col space-y-8">
            <WorksList works={works} />
          </div>
          <div className="flex w-full items-end justify-start">
            <UnderlineLink
              href="/works"
              role="button"
              aria-label="See more works"
            >
              See more works
            </UnderlineLink>
          </div>
        </div>
      </section>
      <section className="mb-12 flex w-full flex-wrap items-center justify-center">
        <div className="flex w-full flex-col items-start justify-start">
          <div>
            <Heading as="h2">Latest Notes</Heading>
            <Underline />
          </div>
          <div className="mb-8 mt-6 flex w-full flex-col space-y-8">
            <NotesList filteredNotes={notes} />
          </div>
          <div className="flex w-full items-start justify-start">
            <UnderlineLink
              href="/notes"
              role="button"
              aria-label="See more notes"
            >
              See more notes
            </UnderlineLink>
          </div>
        </div>
      </section>
    </Main>
  );
}
