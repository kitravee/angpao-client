import { UrlObject } from 'url';

import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { forwardRef } from 'react';

interface RouterLinkProps {
  className?: string;
  children?: any;
  hrefAs?: string | UrlObject | undefined;
}

export type NextLinkComposedProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
> &
  Omit<NextLinkProps, 'href'> & {
    to: NextLinkProps['href'];
    href?: any;
  } & RouterLinkProps &
  MuiLinkProps;

export const RouterLink = forwardRef<HTMLAnchorElement, NextLinkComposedProps>(
  (props, ref) => {
    const {
      to,
      as,
      locale,
      replace,
      scroll,
      shallow,
      prefetch = false,
      children,
      ...rest
    } = props;
    return (
      <NextLink
        passHref
        as={as}
        href={to}
        locale={locale}
        prefetch={prefetch}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
      >
        <MuiLink
          ref={ref}
          sx={{
            '&:before': {
              content: '""',
              cursor: 'inherit',
              display: 'block',
              height: '100%',
              left: '0px',
              position: 'absolute',
              top: '0px',
              width: '100%',
              zIndex: '1',
            },
          }}
          {...rest}
        >
          {children}
        </MuiLink>
      </NextLink>
    );
  },
);

RouterLink.displayName = 'RouterLink';
