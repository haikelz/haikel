import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { Provider } from "jotai";
import type { AppProps } from "next/app";
import { appAnimation } from "~lib/utils/animation";
import "~styles/index.scss";
import Template from "~ui/templates/index";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <Provider>
      <Template>
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait" initial={false}>
            <m.div key={router.route} {...appAnimation}>
              <Component {...pageProps} />
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </Template>
    </Provider>
  );
};

export default App;
