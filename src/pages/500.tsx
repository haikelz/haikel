import { Heading } from "@/atoms/Heading";
import { NotFoundImage } from "@/atoms/NotFoundImage";
import { Paragraph } from "@/atoms/Paragraph";
import Layout from "@/templates/Layout";

const ServerErrorPage = () => {
  return (
    <Layout
      title="500 Internal Server Error"
      description="Sepertinya servernya sedang bermasalah. Maaf yah"
      className="flex min-h-screen flex-col items-center justify-center text-center"
    >
      <NotFoundImage />
      <div className="mt-6 flex flex-col items-center">
        <Heading as="h4" className="text-xl sm:text-2xl">
          500 Internal Erver Error
        </Heading>
        <Paragraph className="" isCenter={false}>
          Sepertinya servernya sedang bermasalah. Maaf yah
        </Paragraph>
      </div>
    </Layout>
  );
};

export default ServerErrorPage;
