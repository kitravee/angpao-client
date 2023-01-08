import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';

import { getConfigAuthCookies } from './get-config-auth-cookies';

const cookieConfig = getConfigAuthCookies(true);

export default withAuth({
  callbacks: {
    authorized: async ({ req }) => {
      const token = await getToken({
        req,
        cookieName: cookieConfig.sessionToken.name,
      });

      return !!token;
    },
  },
});
