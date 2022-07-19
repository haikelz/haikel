import { useAtom } from "jotai";
import { mountedAtom } from "../store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import "@/src/styles/globals.css";
import "@/src/styles/progress.css";
import Layout from "@/src/components/templates/layout";
import NProgress from "nprogress";
import SEO from "next-seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useAtom(mountedAtom);
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
  }, [router, mounted]);

  return (
    mounted && (
      <>
        <DefaultSeo {...SEO} />
        <Layout>
          <div className="dark:bg-[#191724] dark:text-white bg-slate-50">
            <Component {...pageProps} />
          </div>
        </Layout>
      </>
    )
  );
}

export default MyApp;
