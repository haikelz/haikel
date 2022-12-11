import { Paragraph } from "@/components/atoms/paragraph";
import Layout from "@/components/templates/layout";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <>
      <NextSeo title="Haikel" description="Frontend Enthusiast" />
      <Layout className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mb-1 text-3xl font-bold">Hello, I&#39;m Haikel 🌸</h1>
          <Paragraph className="mb-4" isCenter>
            Frontend Enthusiast
          </Paragraph>
        </div>
      </Layout>
    </>
  );
};

export default Home;
