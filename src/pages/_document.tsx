import Document, { Head, Html, Main, NextScript } from 'next/document';


export default class _Document extends Document {

  render() {
    return (
      <Html>
        <Head>
          {/* <title>AssetxPro</title> */}
          {/* <link
            rel="shortcut icon"
            href="alarm-clock.png"
            type="image/x-icon"
          /> */}
          <link rel="manifest" href="/manifest.json" />
          {/* <meta name="theme-color" content="#fff" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
