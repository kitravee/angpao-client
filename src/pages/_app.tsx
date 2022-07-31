import '@/styles/globals.css';

import { EmotionCache } from '@emotion/cache';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import { createEmotionCache, EmotionCacheProvider } from '@/lib/emotion';
import { MainThemeProvider } from '@/theme/main-theme-provider';
import { PageComponent } from '@/types/next-page';

interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: PageComponent;
}

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: CustomAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <EmotionCacheProvider emotionCache={emotionCache}>
        <MainThemeProvider>
          {getLayout(<Component {...pageProps} />)}
        </MainThemeProvider>
      </EmotionCacheProvider>
    </SessionProvider>
  );
}

export default MyApp;
