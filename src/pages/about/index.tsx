import { setLanguage } from "@/lib/helpers/setLanguage";
import { languageAtom } from "@/store";
import Layout from "@/templates/Layout";
import AboutImage from "@/ui/images/AboutImage";
import { Heading, Paragraph, Underline, UnderlineSpan } from "@/ui/typography";
import { socialMediaList } from "@/lib/utils/data";
import { useReducerAtom } from "jotai/utils";
import Link from "next/link";
import { twJoin } from "tailwind-merge";

const About = () => {
  const [language, toggleLanguage] = useReducerAtom<boolean, unknown>(languageAtom, setLanguage);

  return (
    <Layout title="About" description="About Me" className="pt-6 md:pt-24">
      <div className="mb-10 flex w-full flex-wrap items-center justify-center">
        <div className="mb-1 flex flex-col items-center justify-center lg:mb-0">
          <div className="flex flex-col items-center justify-center">
            <Heading as="h2" className="text-center">
              About
            </Heading>
            <Underline />
          </div>
          <div className="mt-2 flex flex-col items-center justify-center sm:mt-4">
            <AboutImage />
            {/**
             * Logic:
             * Jika language bernilai true, maka tampilkan bahasa Inggris dulu
             * Jika language bernilai false, maka tampilkan bahasa Indonesia
             */}
            <div className="sm:w-9/12 lg:w-[70%]">
              {language ? (
                <Paragraph className="mt-3 sm:ml-4" isCenter>
                  Hello. I&#39;m Haikel. An ordinary person who interested in Frontend stuff, User
                  Interface/Experience, Design Systems, and Linux. Feel free to reach me via{" "}
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
              ) : (
                <Paragraph className="mt-3 sm:ml-4" isCenter>
                  Halo. Saya Haikel. Seorang biasa yang tertarik dengan hal-hal berbau Frontend,
                  User Interface/Experience, Design Systems, dan Linux. Jangan sungkan untuk
                  terkoneksi dengan saya via{" "}
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
                    <UnderlineSpan>Lihat di Bahasa Inggris.</UnderlineSpan>
                  </button>
                </Paragraph>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-6 px-4 sm:px-6 md:py-24">
        <div className="flex w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <Heading as="h2" className="text-center">
              Journey
            </Heading>
            <Underline />
          </div>
        </div>
        <Paragraph className="" isCenter>
          My Experience, and journey
        </Paragraph>
        <div className="mt-10 flex flex-col items-center justify-center">
          <div>
            {/** SMA */}
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-fireopal dark:bg-crayola"></div>
              </div>
              <div
                className={twJoin(
                  "relative inline-flex h-6 w-6 flex-shrink-0 items-center justify-center",
                  "rounded-full bg-fireopal text-white dark:bg-crayola"
                )}
              >
                <div className="h-3 w-3 rounded-full bg-white"></div>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="title-font text-xl font-medium tracking-wider">Coming soon....</h2>
              </div>
            </div>
            {/** Coming Soon */}
            <div className="relative flex pb-12">
              <div
                className={twJoin(
                  "relative inline-flex h-6 w-6 flex-shrink-0 items-center justify-center",
                  "rounded-full bg-[#F05454] text-white dark:bg-[#2563EB]"
                )}
              >
                <div className="h-3 w-3 rounded-full bg-white"></div>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="title-font text-xl font-medium tracking-wider">
                  SMAN 1 Pangkalpinang
                </h2>
                <p className="my-1">Natural Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
