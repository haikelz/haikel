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
import Main from "~components/main";
import TransitionLayout from "~components/transition-layout";
import { sortedAllNotes, sortedAllWorks } from "~features";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import { ibmPlexMono } from "~lib/utils/fonts";
import { tw } from "~lib/utils/tw";
import { NotesList, WorksList } from "~ui/lists";
import { Heading, Paragraph, UnderlineLink } from "~ui/typography";

const socialMediaList = [
  { id: 1, icon: MailIcon, route: "mailto:halo@ekel.dev", title: "E-mail" },
  { id: 2, icon: RssIcon, route: "https://ekel.dev/rss.xml", title: "RSS" },
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

export default async function HomePage() {
  return (
    <Main className={tw("flex flex-col items-start justify-start", "pt-8")}>
      <section className="flex w-full flex-wrap items-center justify-center">
        <TransitionLayout
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={tw(
            "flex w-full flex-col items-start justify-start",
            "mb-10"
          )}
        >
          <Intro />
          <Experiences />
          <FeaturedWorks />
          <LatestNotes />
        </TransitionLayout>
      </section>
    </Main>
  );
}

function Intro() {
  return (
    <div
      className={tw("flex flex-col items-start justify-start", "md:text-start")}
    >
      <Heading as="h1">Haikel Ilham Hakim</Heading>
      <div className="my-4">
        <Paragraph id="description">
          An Informatics Engineering student with over 2 years of experience in
          Web Development. Proven ability to collaborate effectively within a
          team environment and deliver numerous Website Projects, both internal
          and Open Source. Seeking to apply and expand skills in a professional
          setting.{" "}
          <b>
            <i>Keep it simple</i>
          </b>
          , is one of my principles while crafting something.
          <br />
          Apart from coding, I do <b>Photography</b> with my camera. Mostly I
          took street photos, nature, historic place, and cosplayer at an event.
          I love this hobby because it gives me many perspective about life, and
          of course, It&#39;s fun.
        </Paragraph>
      </div>
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
                  className={tw("rounded-md", "p-1")}
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
  );
}

function Experiences() {
  return (
    <div
      className={tw(
        "flex flex-col items-start justify-start",
        "mt-8 md:text-start w-full"
      )}
    >
      <Heading as="h2">Experience</Heading>
      <div className="w-full mt-4 space-y-5">
        <div className="w-full">
          <div className="flex flex-col md:flex-row w-full md:justify-between">
            <div>
              <div className="flex space-x-2 items-center w-fit">
                <Heading as="h3">Infinite Learning</Heading>
                <code
                  className={tw(
                    "rounded-sm px-2 py-0.5 text-sm font-semibold dark:bg-base-1 bg-base-5",
                    ibmPlexMono
                  )}
                >
                  Apprenticeship
                </code>
              </div>
              <Paragraph className="font-semibold mt-0.5">
                Web Development & UI/UX Design
              </Paragraph>
            </div>
            <div>
              <Paragraph className="font-semibold text-sm mt-1 md:mt-0">
                Feb 2024 - Jun 2024
              </Paragraph>
            </div>
          </div>
          <div className="mt-2">
            <ul className="list-type-disc list-position-outside">
              <li>
                <Paragraph>
                  Responsible as a Programmer to do market research, conducted
                  business analysis, performed usability testing, and
                  constructed the Frontend and Backend of the project from
                  scratch using React JS (Frontend) and Express JS (Backend).
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Utilized Typescript as the main programming language for the
                  Frontend side and Docker for isolated build.
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Worked closely with Designer and Project Manager to streamline
                  project workflow.
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Assisted colleagues in troubleshooting JavaScript and React
                  JS-related issues.
                </Paragraph>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col md:flex-row w-full md:justify-between">
            <div>
              <div className="flex space-x-2 items-center w-fit">
                <Heading as="h3">[Undisclosed]</Heading>
                <code
                  className={tw(
                    "rounded-sm px-2 py-0.5 text-sm font-semibold dark:bg-base-1 bg-base-5",
                    ibmPlexMono
                  )}
                >
                  Freelance
                </code>
              </div>
              <Paragraph className="font-semibold mt-0.5">
                Frontend Web Developer
              </Paragraph>
            </div>
            <div>
              <Paragraph className="font-semibold mt-1 md:mt-0 text-sm">
                Nov 2023 - Dec 2023
              </Paragraph>
            </div>
          </div>
          <div className="mt-2">
            <ul className="list-type-disc list-position-outside">
              <li>
                <Paragraph>
                  Responsible for handling, fixing bugs, and developing
                  requested features to the existing dashboard. The dashboard
                  was created using React JS, Tailwind CSS, and Context API.
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Improve the performance of the dashboard and remove unused or
                  redundant code.
                </Paragraph>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col md:flex-row w-full md:justify-between">
            <div>
              <div className="flex space-x-2 items-center w-fit">
                <Heading as="h3">We Up Indonesia</Heading>
                <code
                  className={tw(
                    "rounded-sm px-2 py-0.5 text-sm font-semibold dark:bg-base-1 bg-base-5",
                    ibmPlexMono
                  )}
                >
                  Contract
                </code>
              </div>
              <Paragraph className="font-semibold mt-0.5">
                Frontend Web Developer
              </Paragraph>
            </div>
            <div>
              <Paragraph className="font-semibold mt-1 md:mt-0 text-sm">
                Oct 2022 - Dec 2022
              </Paragraph>
            </div>
          </div>
          <div className="mt-2">
            <ul className="list-type-disc list-position-outside">
              <li>
                <Paragraph>
                  Responsible for slicing and building a company profile Website
                  for We Up using Next JS, Typescript, Tailwind CSS, and AOS.
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Implement Atomic Design to the project, making components more
                  manageable and reusable.
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Write documentation about the project and collaborate with
                  other divisions.
                </Paragraph>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedWorks() {
  const works = sortedAllWorks.slice(0, 4);

  return (
    <div>
      <div
        className={tw(
          "flex flex-col items-start justify-start",
          "mt-8 md:text-start"
        )}
      >
        <Heading as="h2">Featured Works</Heading>
        <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 grid-rows-1 w-full gap-4">
          <WorksList works={works} />
        </div>
      </div>
      <div className="w-full flex justify-end mt-4 w-fit">
        <UnderlineLink href="/works">See other works</UnderlineLink>
      </div>
    </div>
  );
}

function LatestNotes() {
  const notes = sortedAllNotes.slice(0, 4);

  return (
    <div>
      <div
        className={tw(
          "flex flex-col items-start justify-start",
          "mt-8 md:text-start"
        )}
      >
        <Heading as="h2">Latest Notes</Heading>
        <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 grid-rows-1 w-full gap-4">
          <NotesList filteredNotes={notes} />
        </div>
      </div>
      <div className="w-full flex justify-end mt-4 w-fit">
        <UnderlineLink href="/notes">See other notes</UnderlineLink>
      </div>
    </div>
  );
}
