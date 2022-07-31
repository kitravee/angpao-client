import { CacheProvider, EmotionCache } from '@emotion/react';
import { FC } from 'react';

import { createEmotionCache } from './emotion';

type Props = {
  emotionCache?: EmotionCache;
  children?: React.ReactNode;
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const EmotionCacheProvider: FC<Props> = (props) => {
  const { emotionCache = clientSideEmotionCache, children } = props;

  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
};
