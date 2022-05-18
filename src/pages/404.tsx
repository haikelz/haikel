import { Box, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

const NotFoundPage = () => {
  const bg = useColorModeValue("#f1f5f9", "#191724");
  const router = useRouter();

  // Note: redirect user to homepage after 5s waiting, in here i use useRouter and useEffect
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  });

  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <Box
        bg={bg}
        className="h-screen flex flex-col text-center justify-center items-center"
      >
        <Image width="200px" height="200px" src="/img/taken.svg" alt="Error" />
        <div className="mt-6 flex flex-col items-center">
          <h2 className="text-xl font-bold sm:text-2xl">Oops....</h2>
          <p className="text-xs sm:text-base">
            Halaman yang anda cari tidak ditemukan!
          </p>
        </div>
      </Box>
    </>
  );
};

export default NotFoundPage;
