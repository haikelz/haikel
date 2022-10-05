import { Provider, useAtom } from "jotai";
import { mountedAtom } from "@/store/index";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import { AnimatePresence, motion } from "framer-motion";
import { appAnimation } from "@/utils/animation";
import type { AppProps } from "next/app";
import "@/styles/index.scss";
import Layout from "@/components/templates/layout";
import NProgress from "nprogress";
import SEO from "next-seo.config";

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
            <AnimatePresence exitBeforeEnter initial={false}>
              <motion.div key={router.route} {...appAnimation}>
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </Layout>
        </Provider>
      </>
    )
  );
};

export default App;
