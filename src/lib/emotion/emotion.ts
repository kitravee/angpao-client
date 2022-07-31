import createCache from '@emotion/cache';

// // prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// // It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
// export function createEmotionCache() {
//   return createCache({ key: 'css', prepend: false });
// }

const isBrowser = typeof document !== 'undefined';

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export function createEmotionCache() {
  let insertionPoint: HTMLElement | undefined;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector(
      'meta[name="emotion-insertion-point"]',
    );
    insertionPoint = (emotionInsertionPoint ?? undefined) as
      | HTMLElement
      | undefined;
  }

  return createCache({ key: 'mui-style', insertionPoint });
}
