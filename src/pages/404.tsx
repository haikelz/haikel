import { NotFoundImage } from "@/components/atoms/notFoundImage";
import { Paragraph } from "@/components/atoms/paragraph";
import { NextSeo } from "next-seo";

const NotFoundPage = () => {
  return (
    <>
      <NextSeo title="404 Not Found!" description="Halaman yang anda cari tidak ditemukan!" />
      <section className="flex min-h-screen flex-col items-center justify-center text-center">
        <NotFoundImage />
        <div className="mt-6 flex flex-col items-center">
          <h2 className="text-xl font-bold sm:text-2xl">404 Not Found</h2>
          <Paragraph isCenter={false}>Halaman yang anda cari tidak ditemukan!</Paragraph>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
