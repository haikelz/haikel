import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconRss,
} from "@tabler/icons-react";
import { Notes, Works } from "contentlayer/generated";
import Link from "next/link";
import Greeting from "~components/greeting";
import Main from "~components/main";
import { tw } from "~lib/helpers";
import { sortedAllNotes, sortedAllWorks } from "~lib/services";
import { NotesList, WorksList } from "~ui/lists";
import { Heading, Paragraph, Underline, UnderlineLink } from "~ui/typography";

const socialMediaList = [
  { id: 1, icon: IconMail, route: "mailto:halo@haikel.app" },
  { id: 2, icon: IconRss, route: "https://haikel.app/rss.xml" },
  { id: 3, icon: IconBrandFacebook, route: "https://facebook.com/kelgfx" },
  { id: 4, icon: IconBrandInstagram, route: "https://instagram.com/ekel.tsx" },
  { id: 5, icon: IconBrandGithub, route: "https://github.com/haikelz" },
  {
    id: 6,
    icon: IconBrandLinkedin,
    route: "https://www.linkedin.com/in/haikel",
  },
];

export default async function HomePage() {
  const notes: Notes[] = sortedAllNotes.slice(0, 4);
  const works: Works[] = sortedAllWorks.slice(0, 4);

  return (
    <Main className={tw("flex flex-col items-start justify-start", "py-8")}>
      <section className="mb-12 flex w-full flex-wrap items-center justify-center">
        <div className={tw("flex w-full flex-col items-start justify-start", "md:flex-row")}>
          <div className={tw("flex flex-col items-start justify-start", "md:mt-0 md:text-start")}>
            <Greeting />
            <Paragraph id="description" className="my-4">
              Someone who interested in Frontend stuff. Familiar with Javascript/Typescript, React
              Ecosystem, and Linux(for daily use). Try to follow best practices as much as i can. I
              can work in a team or solo. In my spare time, i crafted something, go out to take some
              photos, learn new things, or just improve my English.
            </Paragraph>
            <ul className="flex items-center justify-center space-x-4">
              {socialMediaList.map((item) => {
                const Icon = item.icon;
                return (
                  <li className="transition-all hover:-translate-y-0.5" key={item.id}>
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
                        <Icon size={22} />
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
            <UnderlineLink href="/works" role="button" aria-label="See more works">
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
            <UnderlineLink href="/notes" role="button" aria-label="See more notes">
              See more notes
            </UnderlineLink>
          </div>
        </div>
      </section>
    </Main>
  );
}
