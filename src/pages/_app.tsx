import '@/styles/globals.css';

import { EmotionCache } from '@emotion/cache';
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
    <EmotionCacheProvider emotionCache={emotionCache}>
      <MainThemeProvider>
        {getLayout(<Component {...pageProps} />)}
      </MainThemeProvider>
    </EmotionCacheProvider>
  );
}

export default MyApp;
