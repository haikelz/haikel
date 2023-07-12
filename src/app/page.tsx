import { cxm } from "~lib/helpers";
import { getAllNotes, getAllWorks } from "~lib/services";
import { DEFAULT_OG_URL } from "~lib/utils/constants";
import { NoteMetaProps, WorkMetaProps } from "~models";
import About from "~ui/About";
import Main from "~ui/Main";
import { NotesList, WorksList } from "~ui/lists";
import { Heading, Underline, UnderlineLink } from "~ui/typography";

const baseMetadata = {
  title: "Haikel Ilham Hakim",
  description:
    "A person who loves writing code for Front End side. Crafting simple, interactive, responsive, and accessible Websites. Familiar with Javascript/Typescript, React Ecosystem, and Linux(for daily use). Try to follow best practices as much as i can. I can work in a team or solo.",
  url: "https://haikel.app",
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

export default function HomePage() {
  const notes: NoteMetaProps[] = getAllNotes()
    .slice(0, 4)
    .map((note) => note.meta);
  const works: WorkMetaProps[] = getAllWorks()
    .slice(0, 4)
    .map((work) => work.meta);

  return (
    <Main className={cxm("flex flex-col items-start justify-start", "py-8", "md:py-12")}>
      <About />
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
            <UnderlineLink href="/works" role="button" aria-label="More Works">
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
            <UnderlineLink href="/notes" role="button" aria-label="latest notes">
              See more notes
            </UnderlineLink>
          </div>
        </div>
      </section>
    </Main>
  );
}
