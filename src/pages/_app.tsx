import type { AppProps } from 'next/app';

import { PageComponent } from '../types/next-page';

interface CustomAppProps extends AppProps {
  Component: PageComponent;
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
