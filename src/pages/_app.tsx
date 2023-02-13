import { Provider } from "jotai";
import type { AppProps } from "next/app";
import "~styles/index.scss";
import Template from "~ui/templates/index";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <Template>
        <Component {...pageProps} />
      </Template>
    </Provider>
  );
};

export default App;
