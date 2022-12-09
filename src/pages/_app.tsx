import Layout from "@/components/templates/layout";
import { mountedAtom } from "@/store";
import "@/styles/index.scss";
import { appAnimation } from "@/utils/animation";
import { AnimatePresence, motion } from "framer-motion";
import { Provider, useAtom } from "jotai";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import type { AppProps } from "next/app";
import { NextRouter, useRouter } from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";

const App = ({ Component, pageProps, router }: AppProps) => {
  const [mounted, setMounted] = useAtom(mountedAtom);
  const Router: NextRouter = useRouter();

  useEffect(() => {
    setMounted(true);

    const handleStart = () => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleStop);
    Router.events.on("routeChangeError", handleStop);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleStop);
      Router.events.off("routeChangeError", handleStop);
    };
  }, [Router, setMounted]);

  return (
    mounted && (
      <>
        <DefaultSeo {...SEO} />
        <Provider>
          <Layout>
            <AnimatePresence mode="wait" initial={false}>
              <motion.main key={router.route} {...appAnimation}>
                <Component {...pageProps} />
              </motion.main>
            </AnimatePresence>
          </Layout>
        </Provider>
      </>
    )
  );
};

export default App;
