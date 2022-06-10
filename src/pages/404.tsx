import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import NotFoundDesc from "@/src/components/atoms/notFound/notFoundDesc";
import NotFoundImage from "@/src/components/atoms/notFound/notFoundImage";

const NotFoundPage = () => {
  const router = useRouter();

  // Note: redirect user to homepage after 5s waiting, in here i use useRouter and useEffect
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);

  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <div className="h-screen flex flex-col text-center justify-center items-center">
        <NotFoundImage />
        <NotFoundDesc />
      </div>
    </>
  );
};

export default NotFoundPage;
