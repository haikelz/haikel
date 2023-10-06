"use client";

import { TypeAnimation } from "react-type-animation";
import { tw } from "~lib/helpers";
import { Heading } from "~ui/typography";

export default function Greeting() {
  return (
    <Heading as="h1" className="flex flex-col justify-center md:flex-row md:space-x-2">
      <span>I&#39;m Haikel, a</span>
      <div className="mt-0.5 md:mt-0">
        <TypeAnimation
          preRenderFirstString={true}
          sequence={["Frontend Web Developer", 2000, "Hobbyist Photographer", 2000]}
          wrapper="span"
          speed={50}
          cursor={true}
          repeat={Infinity}
          className={tw(
            "bg-base-0 dark:bg-gray-100 px-1.5 py-0.5",
            "text-2xl text-gray-100 dark:text-base-0 md:text-3xl"
          )}
        />
      </div>
    </Heading>
  );
}
