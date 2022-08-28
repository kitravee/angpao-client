import createEmotionServer from '@emotion/server/create-instance';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { createEmotionCache } from '@/lib/emotion';

interface Props {
  emotionStyleTags: any;
}

// https://mui.com/styles/advanced/#next-js
export default class MyDocument extends Document<Props> {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          <meta content="" name="emotion-insertion-point" />

          {/* PWA */}
          <meta content="yes" name="mobile-web-app-capable" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta content="angpao" name="application-name" />
          <meta content="angpao" name="apple-mobile-web-app-title" />
          <meta content="/" name="msapplication-starturl" />
          <meta
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport"
          />
          <link href="/manifest.json" rel="manifest" />

          <link
            href="icon-48x48.png"
            rel="icon"
            sizes="48x48"
            type="image/png"
          />
          <link
            href="icon-48x48.png"
            rel="apple-touch-icon"
            sizes="48x48"
            type="image/png"
          />
          <link
            href="icon-72x72.png"
            rel="icon"
            sizes="72x72"
            type="image/png"
          />
          <link
            href="icon-72x72.png"
            rel="apple-touch-icon"
            sizes="72x72"
            type="image/png"
          />
          <link
            href="icon-96x96.png"
            rel="icon"
            sizes="96x96"
            type="image/png"
          />
          <link
            href="icon-96x96.png"
            rel="apple-touch-icon"
            sizes="96x96"
            type="image/png"
          />
          <link
            href="icon-128x128.png"
            rel="icon"
            sizes="128x128"
            type="image/png"
          />
          <link
            href="icon-128x128.png"
            rel="apple-touch-icon"
            sizes="128x128"
            type="image/png"
          />
          <link
            href="icon-144x144.png"
            rel="icon"
            sizes="144x144"
            type="image/png"
          />
          <link
            href="icon-144x144.png"
            rel="apple-touch-icon"
            sizes="144x144"
            type="image/png"
          />
          <link
            href="icon-152x152.png"
            rel="icon"
            sizes="152x152"
            type="image/png"
          />
          <link
            href="icon-152x152.png"
            rel="apple-touch-icon"
            sizes="152x152"
            type="image/png"
          />
          <link
            href="icon-192x192.png"
            rel="icon"
            sizes="192x192"
            type="image/png"
          />
          <link
            href="icon-192x192.png"
            rel="apple-touch-icon"
            sizes="192x192"
            type="image/png"
          />
          <link
            href="icon-384x384.png"
            rel="icon"
            sizes="384x384"
            type="image/png"
          />
          <link
            href="icon-384x384.png"
            rel="apple-touch-icon"
            sizes="384x384"
            type="image/png"
          />
          <link
            href="icon-512x512.png"
            rel="icon"
            sizes="512x512"
            type="image/png"
          />
          <link
            href="icon-512x512.png"
            rel="apple-touch-icon"
            sizes="512x512"
            type="image/png"
          />

          {this?.props?.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
