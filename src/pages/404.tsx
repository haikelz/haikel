import { Heading } from "@/atoms/Heading";
import { NotFoundImage } from "@/atoms/NotFoundImage";
import { Paragraph } from "@/atoms/Paragraph";
import Layout from "@/templates/Layout";

const NotFoundPage = () => {
  return (
    <Layout
      title="404 Not Found!"
      description="Halaman yang anda cari tidak ditemukan!"
      className="flex min-h-screen flex-col items-center justify-center text-center"
    >
      <NotFoundImage />
      <div className="mt-6 flex flex-col items-center">
        <Heading as="h4" className="text-xl sm:text-2xl">
          404 Not Found
        </Heading>
        <Paragraph isCenter={false}>Halaman yang anda cari tidak ditemukan!</Paragraph>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
