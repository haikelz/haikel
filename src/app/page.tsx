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
import Main from "~components/main";
import TransitionLayout from "~components/transition-layout";
import { sortedAllNotes } from "~features/notes";
import { sortedAllWorks } from "~features/works";
import { tw } from "~lib/helpers";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import { ibmPlexMono } from "~lib/utils/fonts";
import { WorksList } from "~ui/lists";
import { Heading, Paragraph, UnderlineLink } from "~ui/typography";

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
  const works: Works[] = sortedAllWorks.slice(0, 4);
  const notes: Notes[] = sortedAllNotes.slice(0, 4);

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
          <div
            className={tw(
              "flex flex-col items-start justify-start",
              "md:text-start"
            )}
          >
            <Heading as="h2">I&#39;m Haikel Ilham Hakim</Heading>
            <div className="my-4">
              <Paragraph id="description">
                A <span className="font-bold">Frontend Web Developer</span> with
                a main focus on building responsive, interactive, maintainable,
                and accessible Websites. Familiar with{" "}
                <span className="font-bold">
                  Javascript/Typescript, React Ecosystem, Linux
                </span>
                (for daily use) and sometimes i do backend things with{" "}
                <span className="font-bold">Nest JS</span>. Always try to follow
                best practices as much as i can.{" "}
                <span className="font-bold">Keep it simple</span>, is one of my
                principles while building something. Apart from coding, i do{" "}
                <span className="font-bold">photography</span> with my camera.
                Mostly i took street photos, or go to local event to have some
                photo shoots.
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
                        Internship
                      </code>
                    </div>
                    <Paragraph className="font-semibold mt-0.5">
                      Web Development & UI/UX Design
                    </Paragraph>
                  </div>
                  <div>
                    <Paragraph className="font-semibold text-sm mt-1 md:mt-0">
                      November 2023 - December 2023
                    </Paragraph>
                  </div>
                </div>
                <div className="mt-2">
                  <Paragraph>MSIB 6 at Infinite Learning Batam</Paragraph>
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
                      November 2023 - December 2023
                    </Paragraph>
                  </div>
                </div>
                <div className="mt-2">
                  <ul className="list-type-disc list-position-outside">
                    <li>
                      <Paragraph>
                        Responsible for handling, fixing bugs, and developing
                        requested features to the existing dashboard. The
                        dashboard was created using React JS, Tailwind CSS, and
                        Context API.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Improve the performance of the dashboard and remove
                        unused or redundant code.
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
                      October 2022 - December 2022
                    </Paragraph>
                  </div>
                </div>
                <div className="mt-2">
                  <ul className="list-type-disc list-position-outside">
                    <li>
                      <Paragraph>
                        Responsible for slicing and building a company profile
                        Website for We Up using Next JS, Typescript, Tailwind
                        CSS, and AOS.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Implement Atomic Design to the project, making
                        components more manageable and reusable.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Write documentation about the project and collaborate
                        with other divisions
                      </Paragraph>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className={tw(
                "flex flex-col items-start justify-start",
                "mt-8 md:text-start"
              )}
            >
              <Heading as="h2">Featured Works</Heading>
              <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 grid-rows-1 w-full gap-5">
                <WorksList works={works} />
              </div>
            </div>
            <div className="w-full flex justify-end mt-4 w-fit">
              <UnderlineLink href="/works">See other works</UnderlineLink>
            </div>
          </div>
        </TransitionLayout>
      </section>
    </Main>
  );
}
