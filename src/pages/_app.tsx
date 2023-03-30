import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { Provider } from "jotai";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { cxm } from "~lib/helpers/cxm";
import { ibmPlexSerif, jetbrains, spaceGrotesk } from "~lib/utils/fonts";
import { BottomNav, Footer, TopNav } from "~sections";
import "~styles/index.css";

const appAnimation = {
  transition: { duration: 0.27 },
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};

const App = ({ Component, pageProps: { session, ...pageProps }, router }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Provider>
        <style jsx global>{`
          body {
            font-family: ${ibmPlexSerif.style.fontFamily};
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${spaceGrotesk.style.fontFamily};
          }

          .prose pre,
          pre code {
            font-family: ${jetbrains.style.fontFamily};
          }
        `}</style>
        <div
          className={cxm(
            "min-h-screen w-full bg-azure bg-fixed bg-center",
            " dark:bg-zinc-900 dark:text-gray-100"
          )}
        >
          <TopNav />
          <LazyMotion features={domAnimation}>
            <AnimatePresence mode="wait" initial={false}>
              <m.div {...appAnimation} key={router.asPath} className="px-4">
                <Component {...pageProps} />
              </m.div>
            </AnimatePresence>
          </LazyMotion>
          <Footer />
          <BottomNav />
        </div>
      </Provider>
    </SessionProvider>
  );
};

export default App;
