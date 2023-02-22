import { Provider } from "jotai";
import type { AppProps } from "next/app";
import { twJoin } from "tailwind-merge";
import { ibmPlexSerif, jetbrains, spaceGrotesk } from "~lib/utils/fonts";
import BottomNav from "~sections/BottomNav";
import Footer from "~sections/Footer";
import TopNav from "~sections/TopNav";
import "~styles/index.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
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
        className={twJoin(
          "min-h-screen w-full bg-azure bg-fixed bg-center",
          " dark:bg-zinc-900 dark:text-gray-100"
        )}
      >
        <TopNav />
        <div className="px-4">
          <Component {...pageProps} />
        </div>
        <Footer />
        <BottomNav />
      </div>
    </Provider>
  );
};

export default App;
