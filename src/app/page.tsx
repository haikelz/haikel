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
import { RoughNotationGroup } from "react-rough-notation";
import Main from "~components/main";
import TransitionLayout from "~components/transition-layout";
import { tw } from "~lib/helpers";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import { Heading, Notation, Paragraph } from "~ui/typography";

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
    route: "/Resume_HaikelIlhamHakim.pdf",
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
  return (
    <Main className={tw("flex flex-col items-start justify-start", "pt-8")}>
      <section className="flex mb-10 w-full flex-wrap items-center justify-center">
        <TransitionLayout
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={tw(
            "flex w-full flex-col items-start justify-start",
            "md:flex-row mb-10"
          )}
        >
          <div
            className={tw(
              "flex flex-col items-start justify-start",
              "md:mt-0 md:text-start"
            )}
          >
            <Heading as="h1">I&#39;m Haikel Ilham Hakim</Heading>
            <Paragraph id="description" className="my-4">
              <RoughNotationGroup show={true}>
                A{" "}
                <Notation
                  type="highlight"
                  lightModeColor="#FFFF3F"
                  darkModeColor="#E11D48"
                  animationDelay={500}
                >
                  <span className="font-bold">Frontend Web Developer</span>
                </Notation>{" "}
                with a main focus on building responsive, interactive,
                maintainable, and accessible Websites. Familiar with{" "}
                <span className="font-bold">
                  Javascript/Typescript, React Ecosystem, Linux
                </span>
                (for daily use) and sometimes i do backend things with{" "}
                <span className="font-bold">Nest JS</span>. Always try to follow
                best practices as much as i can.{" "}
                <Notation
                  type="highlight"
                  lightModeColor="#FFFF3F"
                  darkModeColor="#E11D48"
                  animationDelay={1500}
                >
                  <span className="font-bold">Keep it simple</span>
                </Notation>
                , is one of my principles while building something.
                <br />
                Sometimes, i spend my time to write notes about my thought,
                experiences, and technical stuff. Apart from coding, i do{" "}
                <Notation
                  type="highlight"
                  lightModeColor="#FFFF3F"
                  darkModeColor="#E11D48"
                  animationDelay={2500}
                >
                  <span className="font-bold">photography</span>
                </Notation>{" "}
                with my camera. Mostly i took street photos, or go to local
                event to have some photo shoots.
              </RoughNotationGroup>
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
        </TransitionLayout>
      </section>
    </Main>
  );
}
