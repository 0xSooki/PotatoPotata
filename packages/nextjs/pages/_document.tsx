import { Html, Head, Main, NextScript } from "next/document";

const Document = (): JSX.Element => {
  return (
    <Html data-theme="potato" lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Signika+Negative:wght@400;500;700&display=swap"
          rel="stylesheet"
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
