import type { AppProps } from 'next/app';

import { PageComponent } from '../types/next-page';

interface CustomAppProps extends AppProps {
  Component: PageComponent;
}

function MyApp(props: CustomAppProps) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  const renderComponent = getLayout(<Component {...pageProps} />);

  return <>{renderComponent}</>;
}

export default MyApp;
