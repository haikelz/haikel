import { useEffect } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import NotFoundDesc from "@/src/components/atoms/notFound/notFoundDesc";
import NotFoundImage from "@/src/components/atoms/notFound/notFoundImage";

const NotFoundPage = () => {
  const Router = useRouter();

  // Note: redirect user to homepage after 5s waiting, in here i use useRouter and useEffect
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 4000);
  }, [Router]);

  return (
    <>
      <NextSeo title="Not Found!" />
      <div className="min-h-screen flex flex-col text-center justify-center items-center">
        <NotFoundImage />
        <NotFoundDesc />
      </div>
    </>
  );
};

export default NotFoundPage;
