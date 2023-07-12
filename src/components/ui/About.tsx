"use client";

import { atom, useAtom } from "jotai";
import { cxm } from "~lib/helpers";
import { Heading, Paragraph, UnderlineSpan } from "~ui/typography";

function atomWithToggle(initialValue?: boolean) {
  const anAtom = atom<boolean | undefined, [nextValue?: boolean | undefined], void>(
    initialValue,
    (get, set, nextValue?: boolean) => {
      const update: boolean = nextValue ?? !get(anAtom);
      set(anAtom, update);
    }
  );

  return anAtom;
}

const languageAtom = atomWithToggle(true);

export default function About() {
  const [language, setLanguage] = useAtom(languageAtom);

  return (
    <section className="mb-12 flex w-full flex-wrap items-center justify-center">
      <div className={cxm("flex w-full flex-col items-start justify-start", "md:flex-row")}>
        <div className={cxm("flex flex-col items-start justify-start", "md:mt-0 md:text-start")}>
          <Heading as="h1">
            Hello, I&#39;m{" "}
            <span
              className={cxm(
                "underline decoration-red decoration-dashed underline-offset-[5px]",
                "dark:gradient-dark dark:animate-text dark:bg-clip-text",
                "dark:text-transparent dark:decoration-blue-500"
              )}
            >
              Haikel
            </span>{" "}
            🌸
          </Heading>
          {language ? (
            <Paragraph className="mt-4">
              A person who loves writing code for Front End side. Crafting simple, interactive,
              responsive, and accessible Websites. Familiar with Javascript/Typescript, React
              Ecosystem, and Linux(for daily use). Try to follow best practices as much as i can. I
              can work in a team or solo.{" "}
              <button type="button" aria-label="toggle language" onClick={() => setLanguage(false)}>
                <UnderlineSpan>See in Indonesia.</UnderlineSpan>
              </button>
            </Paragraph>
          ) : (
            <Paragraph className="mt-4">
              Seseorang yang suka menulis kode untuk sisi Front End. Membuat Website yang sederhana,
              interaktif, responsif, dan accessible. Familiar dengan Javascript/Typescript, React
              Ecosystem, dan Linux (untuk penggunaan sehari-hari). Mencoba mengikuti best practices
              semampu saya. Saya bisa bekerja dalam tim ataupun sendiri.{" "}
              <button type="button" aria-label="toggle language" onClick={() => setLanguage(true)}>
                <UnderlineSpan>Lihat di Bahasa Inggris.</UnderlineSpan>
              </button>
            </Paragraph>
          )}
        </div>
      </div>
    </section>
  );
}
