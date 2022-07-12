import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DefaultSeo } from "next-seo";
import { useTheme } from "../hooks/useTheme";
import type { AppProps } from "next/app";
import "@/src/styles/globals.css";
import "@/src/styles/progress.css";
import Layout from "@/src/components/templates/layout";
import NProgress from "nprogress";
import SEO from "next-seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const [theme] = useTheme();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    const handleStart = () => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    mounted && (
      <>
        <DefaultSeo {...SEO} />
        <Layout>
          {theme === "dark" ? (
            <div className="bg-[#191724] text-white">
              <Component {...pageProps} />
            </div>
          ) : (
            <div className="bg-slate-50">
              <Component {...pageProps} />
            </div>
          )}
        </Layout>
      </>
    )
  );
}

export default MyApp;
