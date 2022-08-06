import '@/styles/globals.css';

import { EmotionCache } from '@emotion/cache';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useState } from 'react';

import { createEmotionCache, EmotionCacheProvider } from '@/lib/emotion';
import { queryConfig } from '@/lib/react-query';
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
  const [queryClient] = useState(() => {
    return new QueryClient({ defaultOptions: queryConfig });
  });

  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <EmotionCacheProvider emotionCache={emotionCache}>
          <MainThemeProvider>
            {getLayout(<Component {...pageProps} />)}
          </MainThemeProvider>
        </EmotionCacheProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
