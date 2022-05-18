import { Box, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import Underline from "@/src/components/underline/underline";

const About = () => {
  const bg = useColorModeValue("#f1f5f9", "#191724");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bg} color={color}>
      <Head>
        <title>About</title>
      </Head>

      <section className="body-font h-screen tracking-wide">
        <div className="container py-24 sm:py-24 mx-auto object-center max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap w-full mb-10">
            <div className="w-full mb-1 lg:mb-0 flex justify-center items-center flex-col">
              <h1 className="sm:text-3xl text-3xl font-bold title-font mb-1 text-center">
                About
              </h1>
              <Underline />
            </div>
            <p className="text-md w-full leading-relaxed mt-4 text-center">
              Hello. I&#39;m Haikel. From Bangka Belitung. Focusing on building
              beautiful and minimal Website. When i have free time, i usually
              watch tech related videos, playing chess, write something on my{" "}
              <Link href="https://haikelz.me/posts">
                <span className="text-blue-500 font-bold hover:text-blue-600 duration-500 cursor-pointer">
                  Blog
                </span>
              </Link>
              , and jogging.
            </p>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default About;
