import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import dynamic from "next/dynamic";

const NotFound = dynamic(() => import("@/src/components/moleculs/notFound"));

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
        <NotFound />
      </div>
    </>
  );
};

export default NotFoundPage;
