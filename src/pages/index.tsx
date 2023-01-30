import { useReducerAtom } from "jotai/utils";
import type { GetStaticProps } from "next";
import Link from "next/link";
import { twJoin, twMerge } from "tailwind-merge";
import { getAllNotes } from "~lib/helpers/getAllNotes";
import { setLanguage } from "~lib/helpers/setLanguage";
import { projectsList, socialMediaList } from "~lib/utils/data";
import { spaceGrotesk } from "~lib/utils/fonts";
import { languageAtom } from "~store";
import { NoteMetaProps, NotesProps } from "~types";
import { GithubIcon, PreviewIcon } from "~ui/icons";
import AboutImage from "~ui/images/AboutImage";
import ListNotes from "~ui/lists/ListNotes";
import Layout from "~ui/templates/Layout";
import { Heading, Paragraph, Underline, UnderlineSpan } from "~ui/typography";

export const getStaticProps: GetStaticProps = async () => {
  const notes: NoteMetaProps[] = getAllNotes()
    .slice(0, 4)
    .map((note) => note.meta);

  return {
    props: {
      notes,
    },
  };
};

const Home = ({ notes }: NotesProps) => {
  const [language, toggleLanguage] = useReducerAtom<boolean, unknown>(languageAtom, setLanguage);

  return (
    <Layout
      title="Haikel"
      description="Frontend Enthusiast"
      className="flex flex-col items-center justify-center pt-6 pb-12 md:pt-12"
    >
      {/** About */}
      <section className="mb-20 flex w-full flex-wrap items-center justify-center">
        <div className="mt-2 flex w-full flex-col items-center justify-center sm:mt-4 md:flex-row">
          <div className="flex items-center justify-center">
            <AboutImage />
          </div>
          {/**
           * Logic:
           * Jika language bernilai true, maka tampilkan bahasa Inggris dulu
           * Jika language bernilai false, maka tampilkan bahasa Indonesia
           */}
          <div
            className={twJoin(
              "mt-6 flex flex-col items-center justify-center text-center",
              "sm:w-9/12 md:ml-8 md:mt-0 md:block md:text-start lg:w-[50%]"
            )}
          >
            <Heading as="h1">
              Hello, i&#39;m{" "}
              <span
                className={twJoin(
                  "underline decoration-fireopal decoration-dashed underline-offset-[5px]",
                  "dark:bg-gradient-to-r dark:from-[#0093E9] dark:to-[#80D0C7]",
                  "dark:bg-clip-text dark:text-transparent dark:decoration-[#0093E9]"
                )}
              >
                Haikel
              </span>{" "}
              🌸
            </Heading>
            {language ? (
              <>
                <Paragraph className="mt-3">
                  A person who interested in Frontend stuff, User Interface/Experience, Design
                  Systems, Open Source, and Linux. Feel free to reach me via{" "}
                  {socialMediaList.map((item, index) => (
                    <Link className="link-contact" key={index + 1} href={item.link} passHref>
                      {item.name}
                      {item.name === "Telegram" || item.name === "Facebook"
                        ? ", "
                        : item.name === "Github"
                        ? ", "
                        : ""}
                    </Link>
                  ))}
                  .{" "}
                  <button onClick={toggleLanguage}>
                    <UnderlineSpan>See in Indonesia.</UnderlineSpan>
                  </button>
                </Paragraph>
              </>
            ) : (
              <Paragraph className="mt-3">
                Seseorang yang tertarik dengan hal-hal berbau Frontend, User Interface/Experience,
                Design Systems, Open Source, dan Linux. Kamu dapat mengontak saya via via{" "}
                {socialMediaList.map((item, index) => (
                  <Link className="link-contact" key={index + 1} href={item.link} passHref>
                    {item.name}
                    {item.name === "Telegram" || item.name === "Facebook"
                      ? ", "
                      : item.name === "Github"
                      ? ", "
                      : ""}
                  </Link>
                ))}
                .{" "}
                <button type="button" onClick={toggleLanguage}>
                  <UnderlineSpan>Lihat di Bahasa Inggris.</UnderlineSpan>
                </button>
              </Paragraph>
            )}
          </div>
        </div>
      </section>
      {/** Featured Works */}
      <section className="mb-20 flex w-full flex-wrap items-center justify-center">
        <div className="mt-2 flex w-full flex-col items-center justify-center sm:mt-4">
          <div>
            <Heading as="h2" className="text-center">
              Featured Works
            </Heading>
            <Underline />
          </div>
          <div className="mt-6 grid w-full grid-cols-1 grid-rows-1 gap-6 sm:grid-cols-2">
            {projectsList.slice(0, 4).map((work, index) => (
              <div
                className={twJoin(
                  "cursor-pointer overflow-hidden border-[2.5px]",
                  "border-black bg-azure transition-all ease-in-out",
                  "hover:shadow-light active:scale-95",
                  "dark:border-white dark:bg-raisinblack dark:hover:shadow-dark"
                )}
                key={index + 1}
              >
                <div className="px-6 pb-6 pt-3">
                  <h4 className="mt-2 mb-2 text-xl font-bold">{work.h4}</h4>
                  <Paragraph className="mb-2" isCenter={false}>
                    {work.p}
                  </Paragraph>
                  <div
                    className={twMerge("mt-3 flex space-x-2 font-medium", spaceGrotesk.className)}
                  >
                    {work.stack.map((techstack, index) => (
                      <span
                        key={index + 1}
                        className={twJoin(
                          "bg-celedongreen px-1.5 text-sm text-white",
                          "dark:bg-lightgray dark:text-slate-900"
                        )}
                      >
                        {techstack}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex justify-end">
                    <GithubIcon link={work.repo} />
                    <PreviewIcon link={work.preview} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex w-full items-end justify-end">
            <button type="button">
              <Link href="/works" className="w-fit text-right">
                <UnderlineSpan>See more works</UnderlineSpan>
              </Link>
            </button>
          </div>
        </div>
      </section>
      {/** Latest Notes */}
      <section className="flex w-full flex-wrap items-center justify-center">
        <div className="mt-2 flex w-full flex-col items-center justify-center sm:mt-4">
          <div>
            <Heading as="h2" className="text-center">
              Latest Notes
            </Heading>
            <Underline />
          </div>
          <div className="mt-6 grid w-full grid-cols-1 grid-rows-1 gap-6 sm:grid-cols-2">
            <ListNotes filteredNotes={notes} />
          </div>
          <div className="mt-3 flex w-full items-end justify-end">
            <button type="button">
              <Link href="/notes" className="w-fit text-right">
                <UnderlineSpan>See more notes</UnderlineSpan>
              </Link>
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
