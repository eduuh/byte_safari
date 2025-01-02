import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* pwa icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/avicon.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
