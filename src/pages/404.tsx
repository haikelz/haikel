import { Heading } from "@/components/atoms/Heading";
import { NotFoundImage } from "@/components/atoms/NotFoundImage";
import { Paragraph } from "@/components/atoms/Paragraph";
import { NextSeo } from "next-seo";

const NotFoundPage = () => {
  return (
    <>
      <NextSeo title="404 Not Found!" description="Halaman yang anda cari tidak ditemukan!" />
      <section className="flex min-h-screen flex-col items-center justify-center text-center">
        <NotFoundImage />
        <div className="mt-6 flex flex-col items-center">
          <Heading as="h4" className="text-xl sm:text-2xl">
            404 Not Found
          </Heading>
          <Paragraph isCenter={false}>Halaman yang anda cari tidak ditemukan!</Paragraph>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
