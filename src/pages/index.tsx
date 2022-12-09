import { Paragraph } from "@/components/atoms/paragraph";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <>
      <NextSeo title="Haikel" description="Frontend Enthusiast" />
      <section className="container mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 tracking-wide">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mb-1 text-3xl font-bold">Hello, I&#39;m Haikel 🌸</h1>
          <Paragraph className="mb-4" isCenter>
            Frontend Enthusiast
          </Paragraph>
        </div>
      </section>
    </>
  );
};

export default Home;
