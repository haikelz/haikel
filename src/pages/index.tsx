import { Paragraph } from "@/components/atoms/paragraph";
import Layout from "@/components/templates/layout";
import { cn } from "@/helpers/cn";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <>
      <NextSeo title="Haikel" description="Frontend Enthusiast" />
      <Layout className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mb-1 text-3xl font-bold">
            Hello, I&#39;m{" "}
            <span
              className={cn(
                "dark:bg-gradient-to-r",
                "dark:bg-clip-text",
                "underline",
                "underline-offset-[5px]",
                "decoration-dashed",
                "decoration-underline-light",
                "dark:decoration-[#0093E9]",
                "text-3xl",
                "dark:text-transparent",
                "dark:from-[#0093E9]",
                "dark:to-[#80D0C7]"
              )}
            >
              Haikel
            </span>{" "}
            🌸
          </h1>
          <Paragraph className="mb-4" isCenter>
            Frontend Enthusiast
          </Paragraph>
        </div>
      </Layout>
    </>
  );
};

export default Home;
