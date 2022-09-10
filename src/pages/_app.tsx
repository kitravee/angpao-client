import '@/styles/quill.snow.css';
import '@/styles/globals.css';
import { EmotionCache } from '@emotion/cache';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import { useState } from 'react';

import { createEmotionCache, EmotionCacheProvider } from '@/lib/emotion';
import { queryConfig } from '@/lib/react-query';
import { MainThemeProvider } from '@/theme/main-theme-provider';
// import { ThemeSettingProvider } from '@/theme/theme-provider';
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
    <>
      <Head>
        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />
      </Head>
      <SessionProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
          <SnackbarProvider preventDuplicate maxSnack={3}>
            <EmotionCacheProvider emotionCache={emotionCache}>
              <MainThemeProvider>
                {getLayout(<Component {...pageProps} />)}
              </MainThemeProvider>
            </EmotionCacheProvider>
          </SnackbarProvider>
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
