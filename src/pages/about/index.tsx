import { AboutImage } from "@/components/atoms/aboutImage";
import { Paragraph } from "@/components/atoms/paragraph";
import { Underline } from "@/components/atoms/underline";
import { UnderlineSpan } from "@/components/atoms/underlineSpan";
import Steps from "@/components/molecules/steps";
import Layout from "@/components/templates/layout";
import { setIsLoading } from "@/helpers/setIsLoading";
import { setLanguage } from "@/helpers/setLanguage";
import { languageAtom, loadingAtom } from "@/store";
import { socialMediaList } from "@/utils/data";
import { useReducerAtom } from "jotai/utils";
import { NextSeo } from "next-seo";
import Link from "next/link";

const About = () => {
  const [isLoading, loadingProcess] = useReducerAtom<boolean, unknown>(loadingAtom, setIsLoading);
  const [language, toggleLanguage] = useReducerAtom<boolean, unknown>(languageAtom, setLanguage);

  return (
    <>
      <NextSeo title="About" description="About Me" />
      <Layout className="pt-6 md:pt-24">
        <div className="mb-10 flex w-full flex-wrap items-center justify-center">
          <div className="mb-1 flex flex-col items-center justify-center lg:mb-0">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-center text-3xl font-bold">About</h2>
              <Underline />
            </div>
            <div className="mt-2 flex flex-col items-center justify-center sm:mt-4">
              <AboutImage isLoading={isLoading} loadingProcess={loadingProcess} />
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
              <h2 className="text-center text-3xl font-bold">Journey</h2>
              <Underline />
            </div>
          </div>
          <Paragraph isCenter>My Experience, and journey</Paragraph>
          <Steps />
        </div>
      </Layout>
    </>
  );
};

export default About;
