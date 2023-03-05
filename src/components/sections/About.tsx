import { useReducerAtom } from "jotai/utils";
import Link from "next/link";
import { twJoin } from "tailwind-merge";
import { setLanguage } from "~lib/helpers/setLanguage";
import { socialMediaList } from "~lib/utils/data";
import { languageAtom } from "~store";
import { Heading, Paragraph, UnderlineSpan } from "~ui/typography";

const About = () => {
  const [language, toggleLanguage] = useReducerAtom<boolean, unknown>(languageAtom, setLanguage);

  return (
    <section className="mb-12 flex w-full flex-wrap items-center justify-center">
      <div className="flex w-full flex-col items-start justify-start md:flex-row">
        {/**
         * Logic:
         * Jika language bernilai true, maka tampilkan bahasa Inggris dulu
         * Jika language bernilai false, maka tampilkan bahasa Indonesia
         */}
        <div
          className={twJoin(
            "flex flex-col items-start justify-start",
            "md:mt-0 md:block md:text-start"
          )}
        >
          <Heading as="h1">
            Hello, I&#39;m{" "}
            <span
              className={twJoin(
                "underline decoration-fireopal decoration-dashed underline-offset-[5px]",
                "dark:bg-gradient-to-r dark:from-blue-500 dark:to-[#80D0C7]",
                "dark:animate-text dark:bg-clip-text dark:text-transparent dark:decoration-blue-500"
              )}
            >
              Haikel
            </span>{" "}
            🌸
          </Heading>
          {language ? (
            <Paragraph className="mt-4">
              A person who interested in Frontend stuff, User Interface/Experience, Design Systems,
              Open Source, and Linux. Feel free to reach me via{" "}
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
                <UnderlineSpan>See in Indonesia.</UnderlineSpan>
              </button>
            </Paragraph>
          ) : (
            <Paragraph className="mt-4">
              Seseorang yang tertarik dengan hal-hal terkait Frontend, User Interface/Experience,
              Design Systems, Open Source, dan Linux. Kamu dapat menghubungi saya via{" "}
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
  );
};

export default About;
