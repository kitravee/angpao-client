import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type PageComponent<T = unknown> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
  auth?: boolean;
};
