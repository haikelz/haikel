import { cn } from "@/src/utils/className";
import Head from "next/head";
import Link from "next/link";
import Underline from "@/src/components/underline/underline";
import Image from "next/image";
import { useState } from "react";

const About = () => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div>
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
            <div className="mt-2 sm:mt-4 flex justify-center items-center flex-col sm:flex-row">
              <div className="overflow-hidden rounded-md">
                <Image
                  src="https://avatars.githubusercontent.com/u/77146709?v=4"
                  width="250px"
                  height="250px"
                  alt="Profile"
                  className={cn(
                    "cursor-pointer rounded-md hover:opacity-75 duration-700 ease-in-out",
                    isLoading
                      ? "grayscale blur-2xl scale-110"
                      : "grayscale-0 blur-0 scale-100"
                  )}
                  onLoadingComplete={() => setLoading(false)}
                />
              </div>
              <p className="text-md sm:w-1/2 md:w-[40%] leading-relaxed sm:ml-4 mt-3 sm:mt-0 text-center">
                Hello. I&#39;m Haikel. From Bangka Belitung Islands. Focusing on
                building beautiful and minimal Website. When i have free time, i
                usually watch tech related videos, playing chess, write
                something on my{" "}
                <Link href="https://haikelz.me/posts" passHref>
                  <span className="text-blue-500 font-bold hover:text-blue-600 duration-500 cursor-pointer">
                    Blog
                  </span>
                </Link>
                , and jogging.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
