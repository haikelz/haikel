import { NextSeo } from "next-seo";
import { languageAtom, loadingAtom } from "@/store";
import { setIsLoading } from "@/helpers/setIsLoading";
import { useReducerAtom } from "jotai/utils";
import { setLanguage } from "@/helpers/setLanguage";
import { memo } from "react";
import { useKeydown } from "@/hooks/useKeydown";
import Underline from "@/components/atoms/underline";
import AboutImage from "@/components/atoms/aboutImage";
import Steps from "@/components/molecules/steps";

const About = () => {
  const [isLoading, loadingProcess] = useReducerAtom<boolean, unknown>(loadingAtom, setIsLoading);
  const [language, toggleLanguage] = useReducerAtom<boolean, unknown>(languageAtom, setLanguage);

  useKeydown({ isCtrlKey: true, previousUrl: "/", nextUrl: "/works" });

  return (
    <>
      <NextSeo title="About" />
      <section className="min-h-screen tracking-wide">
        <div className="container mx-auto max-w-7xl object-center px-4 pt-6 sm:px-6 md:pt-24">
          <div className="mb-10 flex w-full flex-wrap items-center justify-center">
            <div className="mb-1 flex flex-col items-center justify-center lg:mb-0">
              <div className="flex w-full flex-col items-center justify-center">
                <h1 className="text-center text-3xl font-bold">About</h1>
                <Underline />
              </div>
              <div className="mt-2 flex flex-col items-center justify-center sm:mt-4">
                <AboutImage isLoading={isLoading} loadingProcess={loadingProcess} />
                {/**
                 * Logic:
                 * Jika language bernilai true, maka tampilkan bahasa Inggris dulu
                 * Jika language bernilai false, maka tampilkan bahasa Indonesia
                 */}
                {language ? (
                  <p className="about-desc">
                    Hello. I&#39;m Haikel. From Bangka Belitung. Mainly using
                    <b> Javascript/Typescript, ReactJS(NextJS), TailwindCSS/ChakraUI, Jotai,</b> and
                    using <b>Linux</b> as primary OS. I enjoy nature, playing chess, jogging, and
                    recently i also enjoy reading book.{" "}
                    <span onClick={toggleLanguage}>See in Indonesia.</span>
                  </p>
                ) : (
                  <p className="about-desc">
                    Halo. Saya Haikel. Berasal dari Bangka Belitung. Biasanya menggunakan
                    <b> Javascript/Typescript, ReactJS(NextJS), TailwindCSS/ChakraUI, Jotai, </b>dan
                    menggunakan <b>Linux</b> sebagai OS utama. Saya senang menikmati alam, bermain
                    catur, jogging, dan baru-baru ini saya juga senang membaca buku.{" "}
                    <span onClick={toggleLanguage}>Lihat di Bahasa Inggris.</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-7xl object-center py-10 px-4 sm:px-6 md:py-24">
          <div className="flex w-full flex-col items-center justify-center">
            <h1 className="text-center text-3xl font-bold">Journey</h1>
            <Underline />
            <p className="w-full text-center leading-relaxed">My Experience, and journey</p>
          </div>
          <Steps />
        </div>
      </section>
    </>
  );
};

export default memo(About);
