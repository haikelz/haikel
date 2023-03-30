import dynamic from "next/dynamic";
import Layout from "~ui/layout";
import { Heading, Paragraph } from "~ui/typography";

const ErrorImage = dynamic(() => import("~ui/images/ErrorImage"));

const ServerErrorPage = () => {
  return (
    <Layout
      title="500 Internal Server Error"
      description="Sepertinya servernya sedang bermasalah. Maaf yah"
      className="flex min-h-screen flex-col items-center justify-center text-center"
    >
      <ErrorImage />
      <section className="mt-6 flex flex-col items-center">
        <Heading as="h4" className="text-xl sm:text-2xl">
          500 Internal Server Error
        </Heading>
        <Paragraph isCenter={false}>Sepertinya servernya sedang bermasalah. Maaf yah</Paragraph>
      </section>
    </Layout>
  );
};

export default ServerErrorPage;
