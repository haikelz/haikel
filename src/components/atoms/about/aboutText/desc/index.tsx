import Link from "next/link";

const AboutDesc = () => {
  return (
    <p className="text-md sm:w-1/2 md:w-[40%] leading-relaxed sm:ml-4 mt-3 sm:mt-0 text-center">
      Hello. I&#39;m Haikel. From Bangka Belitung Islands. Focusing on building
      beautiful and minimal Website. When i have free time, i usually watch tech
      related videos, playing chess, write something on my{" "}
      <Link href="https://haikelz.me/posts" passHref>
        <a className="text-blue-500 font-bold hover:text-blue-600 duration-500">
          Blog
        </a>
      </Link>
      , and jogging.
    </p>
  );
};

export default AboutDesc;
