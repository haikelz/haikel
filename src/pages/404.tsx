import { memo, useEffect } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import NotFoundImage from "@/components/atoms/notFoundImage";

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
        <div className="mt-6 flex flex-col items-center">
          <h2 className="text-xl font-bold sm:text-2xl">Oops....</h2>
          <p className="text-xs sm:text-base">Halaman yang anda cari tidak ditemukan!</p>
        </div>
      </div>
    </>
  );
};

export default memo(NotFoundPage);
