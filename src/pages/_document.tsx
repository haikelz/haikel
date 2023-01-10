import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta
          property="og:image"
          content={`${
            process.env.NEXT_PUBLIC_URL_WEBSITE
              ? "https://" + process.env.NEXT_PUBLIC_URL_WEBSITE
              : ""
          }/api/og`}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
