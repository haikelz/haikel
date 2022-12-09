import { NextSeo } from "next-seo";
import { NotFoundImage } from "@/components/atoms/notFoundImage";
import { Paragraph } from "@/components/atoms/paragraph";

const NotFoundPage = () => {
  return (
    <>
      <NextSeo title="Not Found!" />
      <section className="flex min-h-screen flex-col items-center justify-center text-center">
        <NotFoundImage />
        <div className="mt-6 flex flex-col items-center">
          <h2 className="text-xl font-bold sm:text-2xl">Oops....</h2>
          <Paragraph isCenter={false}>Halaman yang anda cari tidak ditemukan!</Paragraph>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
