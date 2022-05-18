import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "@/src/styles/globals.css";
import Layout from "@/src/components/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
