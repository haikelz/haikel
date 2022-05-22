import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "@/src/styles/globals.css";
import Layout from "@/src/components/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
