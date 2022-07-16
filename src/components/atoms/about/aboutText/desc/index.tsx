import { useAtom } from "jotai";
import { languageAtom } from "@/src/store";

const AboutDesc = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  const span = "cursor-pointer underline font-bold hover:text-sky-600";
  const p =
    "text-md sm:w-9/12 lg:w-[50%] leading-relaxed sm:ml-4 mt-3 text-center";

  const changeLanguage = () =>
    setLanguage(language === "Indonesia" ? "Inggris" : "Indonesia");

  return (
    <>
      {language === "Indonesia" ? (
        <p className={p}>
          Halo. Saya Haikel. Berasal dari Kepulauan Bangka Belitung. Biasanya
          menggunakan
          <b> Javascript/Typescript, ReactJS, TailwindCSS/ChakraUI </b>
          untuk membangun Website. Saya senang menikmati alam, bermain catur,
          jogging, dan baru-baru ini saya juga senang membaca buku.{" "}
          <span onClick={changeLanguage} className={span}>
            Lihat di Bahasa Inggris.
          </span>
        </p>
      ) : (
        <p className={p}>
          Hello. I&#39;m Haikel. From Bangka Belitung Islands. Mainly using
          <b> Javascript/Typescript, ReactJS, TailwindCSS/ChakraUI </b>
          for building Website. I enjoy nature, playing chess, jogging, and
          recently i also enjoy reading book.{" "}
          <span onClick={changeLanguage} className={span}>
            See in Indonesia.
          </span>
        </p>
      )}
    </>
  );
};

export default AboutDesc;
