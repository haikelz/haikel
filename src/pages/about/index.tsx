import { NextSeo } from "next-seo";
import { languageAtom, loadingAtom } from "@/store/index";
import { setIsLoading } from "@/helpers/setIsLoading";
import { useReducerAtom } from "jotai/utils";
import { setLanguage } from "@/helpers/setLanguage";
import { memo } from "react";
import Underline from "@/components/atoms/underline";
import AboutImage from "@/components/atoms/aboutImage";
import Steps from "@/components/molecules/steps";

const About = () => {
  const [isLoading, loadingProcess] = useReducerAtom<boolean, unknown>(loadingAtom, setIsLoading);
  const [language, toggleLanguage] = useReducerAtom<boolean, unknown>(languageAtom, setLanguage);

  const span: string = "cursor-pointer underline underline-offset-2 font-bold hover:text-textHover";
  const p: string =
    "sm:w-9/12 font-normal lg:w-[50%] leading-relaxed sm:ml-4 mt-3 tracking-wide text-center";

  return (
    <>
      <NextSeo title="About" />
      <div className="min-h-screen tracking-wide">
        <div className="container pt-6 md:pt-24 mx-auto object-center max-w-7xl px-4 sm:px-6">
          <div className="flex justify-center items-center flex-wrap w-full mb-10">
            <div className="mb-1 lg:mb-0 flex justify-center items-center flex-col">
              <div className="w-full flex justify-center items-center flex-col">
                <h1 className="text-3xl font-bold text-center">About</h1>
                <Underline />
              </div>
              <div className="mt-2 sm:mt-4 flex flex-col justify-center items-center">
                <AboutImage isLoading={isLoading} loadingProcess={loadingProcess} />
                {/**
                 * Logic:
                 * Jika language bernilai true, maka tampilkan bahasa Inggris dulu
                 * Jika language bernilai false, maka tampilkan bahasa Indonesia
                 **/}
                {language ? (
                  <p className={p}>
                    Hello. I&#39;m Haikel. From Bangka Belitung. Mainly using
                    <b> Javascript/Typescript, ReactJS(NextJS), TailwindCSS/ChakraUI, Jotai,</b> and
                    using <b>Linux</b> as primary OS. I enjoy nature, playing chess, jogging, and
                    recently i also enjoy reading book.{" "}
                    <span onClick={toggleLanguage} className={span}>
                      See in Indonesia.
                    </span>
                  </p>
                ) : (
                  <p className={p}>
                    Halo. Saya Haikel. Berasal dari Bangka Belitung. Biasanya menggunakan
                    <b> Javascript/Typescript, ReactJS(NextJS), TailwindCSS/ChakraUI, Jotai, </b>dan
                    menggunakan <b>Linux</b> sebagai OS utama. Saya senang menikmati alam, bermain
                    catur, jogging, dan baru-baru ini saya juga senang membaca buku.{" "}
                    <span onClick={toggleLanguage} className={span}>
                      Lihat di Bahasa Inggris.
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container py-10 md:py-24 mx-auto object-center max-w-7xl px-4 sm:px-6">
          <div className="w-full flex justify-center items-center flex-col">
            <h1 className="text-3xl font-bold text-center">Journey</h1>
            <Underline />
            <p className="w-full leading-relaxed text-center">My Experience, and journey</p>
          </div>
          <Steps />
        </div>
      </div>
    </>
  );
};

export default memo(About);
