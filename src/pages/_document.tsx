import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import Document, {  DocumentContext, Head, Html, Main, NextScript } from 'next/document';


const MyDocument = () => (
  <Html lang="en">
    <Head>
      <link
      rel="shortcut icon"
      href="vercel.svg"
      // type="image/x-icon"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#fff" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  // 1.1 extract style which had been used
  const style = extractStyle(cache, true);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {/* 1.2 inject css */}
        <style dangerouslySetInnerHTML={{ __html: style }}></style>
      </>
    ),
  };
};

export default MyDocument;
