import { Heading, Paragraph } from "@/atoms";
import Layout from "@/templates/Layout";
import dynamic from "next/dynamic";

const ErrorImage = dynamic(() => import("@/atoms/ErrorImage").then((item) => item.ErrorImage));

const NotFoundPage = () => {
  return (
    <Layout
      title="404 Not Found!"
      description="Halaman yang anda cari tidak ditemukan!"
      className="flex min-h-screen flex-col items-center justify-center text-center"
    >
      <ErrorImage />
      <div className="mt-6 flex flex-col items-center">
        <Heading as="h4" className="text-xl sm:text-2xl">
          404 Not Found
        </Heading>
        <Paragraph className="" isCenter={false}>
          Halaman yang anda cari tidak ditemukan!
        </Paragraph>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
