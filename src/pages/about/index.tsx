import { Heading } from "@/atoms/Heading";
import { Paragraph } from "@/atoms/Paragraph";
import { Underline } from "@/atoms/Underline";
import { UnderlineSpan } from "@/atoms/UnderlineSpan";
import { setLanguage } from "@/helpers/setLanguage";
import Steps from "@/molecules/Steps";
import { languageAtom } from "@/store";
import Layout from "@/templates/Layout";
import { socialMediaList } from "@/utils/data";
import { useReducerAtom } from "jotai/utils";
import dynamic from "next/dynamic";
import Link from "next/link";

const AboutImage = dynamic(import("@/atoms/AboutImage"));

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
        <Steps />
      </div>
    </Layout>
  );
};

export default About;
