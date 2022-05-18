import { Box, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import Underline from "@/src/components/underline/underline";
import Cards from "@/src/components/cards/cards";

const Works = () => {
  const bg = useColorModeValue("#f1f5f9", "#191724");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bg} color={color}>
      <Head>
        <title>Works</title>
      </Head>
      <section id="works" className="body-font tracking-wide">
        <div className="container py-24 sm:py-24 mx-auto object-center max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap w-full mb-10">
            <div className="w-full mb-1 lg:mb-0 flex justify-center items-center flex-col">
              <h1 className="text-3xl font-bold title-font mb-1 text-center">
                My Works
              </h1>
              <Underline />
            </div>
            <p className="text-md w-full leading-relaxed text-center">
              List some of my projects
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            <Cards />
          </div>
        </div>
      </section>
    </Box>
  );
};

export default Works;
