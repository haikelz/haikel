import { mountedAtom } from "@/store";
import "@/styles/index.scss";
import Template from "@/templates/index";
import { appAnimation } from "@/libs/utils/animation";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { Provider, useAtom } from "jotai";
import type { AppProps } from "next/app";
import { useEffect } from "react";

const App = ({ Component, pageProps, router }: AppProps) => {
  const [mounted, setMounted] = useAtom(mountedAtom);

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  return mounted ? (
    <Provider>
      <Template>
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait" initial={false}>
            <m.main key={router.route} {...appAnimation}>
              <Component {...pageProps} />
            </m.main>
          </AnimatePresence>
        </LazyMotion>
      </Template>
    </Provider>
  ) : null;
};

export default App;
