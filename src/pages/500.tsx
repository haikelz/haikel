import { Heading, Paragraph } from "@/ui/typography";
import Layout from "@/ui/templates/Layout";
import dynamic from "next/dynamic";

const ErrorImage = dynamic(() => import("@/ui/images/ErrorImage"));

const ServerErrorPage = () => {
  return (
    <Layout
      title="500 Internal Server Error"
      description="Sepertinya servernya sedang bermasalah. Maaf yah"
      className="flex min-h-screen flex-col items-center justify-center text-center"
    >
      <ErrorImage />
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
