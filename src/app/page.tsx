import { Notes, Works } from "contentlayer/generated";
import {
  FacebookIcon,
  FileTextIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  LucideIcon,
  MailIcon,
  RssIcon,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Main from "~components/main";
import { sortedAllNotes } from "~features/notes";
import { sortedAllWorks } from "~features/works";
import { tw } from "~lib/helpers";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import { NotesList, WorksList } from "~ui/lists";
import { Heading, Paragraph, Underline, UnderlineLink } from "~ui/typography";

const socialMediaList = [
  { id: 1, icon: MailIcon, route: "mailto:halo@haikel.app", title: "E-mail" },
  { id: 2, icon: RssIcon, route: "https://haikel.app/rss.xml", title: "RSS" },
  {
    id: 3,
    icon: FacebookIcon,
    route: "https://facebook.com/kelgfx",
    title: "Facebook",
  },
  {
    id: 4,
    icon: InstagramIcon,
    route: "https://instagram.com/ekel.tsx",
    title: "Instagram",
  },
  {
    id: 5,
    icon: GithubIcon,
    route: "https://github.com/haikelz",
    title: "Github",
  },
  {
    id: 6,
    icon: LinkedinIcon,
    route: "https://www.linkedin.com/in/haikel",
    title: "Linkedin",
  },
  {
    id: 7,
    icon: FileTextIcon,
    route: "https://read.cv/ekel",
    title: "Resume",
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
    <Main className={tw("flex flex-col items-start justify-start", "pt-8")}>
      <section className="flex mb-12 w-full flex-wrap items-center justify-center">
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
            <Heading
              as="h1"
              className="flex flex-col justify-center md:flex-row md:space-x-2"
            >
              I&#39;m Haikel Ilham Hakim
            </Heading>
            <Paragraph id="description" className="my-4">
              A Frontend Web Developer with mainly focuses on building
              responsive, interactive, maintainable, and accessible Websites.
              Familiar with Javascript/Typescript, React Ecosystem, Linux(for
              daily use) and sometimes i do backend things with Nest JS. Always
              try to follow best practices as much as i can. I can work in a
              team or solo.
              <br />
              Apart from coding, i do photography with my camera. Mostly i took
              street photos, or go to local event to have some photo shoots.
              Look at some of my works and notes below.
            </Paragraph>
            <ul className="flex items-center justify-center space-x-4">
              {socialMediaList.map((item) => {
                const Icon: LucideIcon = item.icon;
                return (
                  <li
                    className="transition-all hover:-translate-y-0.5"
                    key={item.id}
                    title={item.title}
                  >
                    <Link href={item.route} target="_blank">
                      <button
                        type="button"
                        className={tw(
                          "rounded-sm",
                          "p-1",
                          "hover:bg-base-5",
                          "active:bg-base-4",
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
