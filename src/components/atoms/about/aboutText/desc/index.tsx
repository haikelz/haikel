import { setLanguage } from "@/src/helpers/setLanguage";
import { languageAtom } from "@/src/store";
import { useReducerAtom } from "jotai/utils";

const AboutDesc = () => {
  const [language, toggleLanguage] = useReducerAtom<boolean, unknown>(languageAtom, setLanguage);

  const span: string =
    "cursor-pointer underline underline-offset-4 decoration-dashed font-bold hover:text-textHover";
  const p: string = "text-md sm:w-9/12 lg:w-[50%] leading-relaxed sm:ml-4 mt-3 text-center";

  return (
    <>
      {/**
       * Logic:
       * Jika language bernilai true, maka tampilkan bahasa Inggris dulu
       * Jika language bernilai false, maka tampilkan bahasa Indonesia
       **/}
      {language ? (
        <p className={p}>
          Hello. I&#39;m Haikel. From Bangka Belitung. Mainly using
          <b> Javascript/Typescript, ReactJS(NextJS), TailwindCSS/ChakraUI </b>
          for building Website. I enjoy nature, playing chess, jogging, and recently i also enjoy
          reading book.{" "}
          <span onClick={toggleLanguage} className={span}>
            See in Indonesia.
          </span>
        </p>
      ) : (
        <p className={p}>
          Halo. Saya Haikel. Berasal dari Bangka Belitung. Biasanya menggunakan
          <b> Javascript/Typescript, ReactJS(NextJS), TailwindCSS/ChakraUI </b>
          untuk membangun Website. Saya senang menikmati alam, bermain catur, jogging, dan baru-baru
          ini saya juga senang membaca buku.{" "}
          <span onClick={toggleLanguage} className={span}>
            Lihat di Bahasa Inggris.
          </span>
        </p>
      )}
    </>
  );
};

export default AboutDesc;
