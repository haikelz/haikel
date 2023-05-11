"use client";

import { atom, useAtom } from "jotai";
import Link from "next/link";
import { cxm } from "~lib/helpers/cxm";
import { Heading, Paragraph, UnderlineSpan } from "~ui/typography";

const socialMediaList = [
  { name: "Email", link: "mailto:halo@haikel.my.id" },
  { name: "Facebook", link: "https://facebook.com/kelgfx" },
  { name: "Github", link: "https://github.com/haikelz" },
  { name: "Linkedin", link: "https://www.linkedin.com/in/haikel" },
];

const atomWithToggle = (initialValue?: boolean) => {
  const anAtom = atom(initialValue, (get, set, nextValue?: boolean) => {
    const update: boolean = nextValue ?? !get(anAtom);
    set(anAtom, update);
  });

  return anAtom;
};

const languageAtom = atomWithToggle(true);

export default function About() {
  const [language, setLanguage] = useAtom(languageAtom);

  const linkContact = "font-bold hover:text-blue-500";

  return (
    <section className="mb-12 flex w-full flex-wrap items-center justify-center">
      <div className="flex w-full flex-col items-start justify-start md:flex-row">
        <div
          className={cxm(
            "flex flex-col items-start justify-start",
            "md:mt-0 md:block md:text-start"
          )}
        >
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
              A person who interested in Frontend stuff, User Interface/Experience, Design Systems,
              Linux, and Photography. Feel free to reach me via{" "}
              {socialMediaList.map((item, index) => (
                <Link className={linkContact} key={index + 1} href={item.link}>
                  {item.name}
                  {item.name === "Facebook" || item.name === "Email"
                    ? ", "
                    : item.name === "Github"
                    ? ", "
                    : ""}
                </Link>
              ))}
              .{" "}
              <button type="button" aria-label="toggle language" onClick={() => setLanguage(false)}>
                <UnderlineSpan>See in Indonesia.</UnderlineSpan>
              </button>
            </Paragraph>
          ) : (
            <Paragraph className="mt-4">
              Seseorang yang tertarik dengan hal-hal terkait Frontend, User Interface/Experience,
              Design Systems, Linux, dan Fotografi. Kamu dapat menghubungi saya via{" "}
              {socialMediaList.map((item, index) => (
                <Link className={linkContact} key={index + 1} href={item.link}>
                  {item.name}
                  {item.name === "Facebook" || item.name === "Email"
                    ? ", "
                    : item.name === "Github"
                    ? ", "
                    : ""}
                </Link>
              ))}
              .{" "}
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
