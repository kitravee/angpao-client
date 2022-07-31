import jwt from 'jsonwebtoken';
import NextAuth, { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

import { NEXTAUTH_URL, NEXTAUTH_JWT_SECRET } from '@/const/env';
import { authProviders, getConfigAuthCookies } from '@/lib/auth';

const useSecureCookies = NEXTAUTH_URL?.startsWith('https://');

export default NextAuth({
  useSecureCookies: useSecureCookies,
  cookies: getConfigAuthCookies(!!useSecureCookies),
  providers: authProviders,
  secret: NEXTAUTH_JWT_SECRET,
  jwt: {
    async encode({ secret, token }) {
      return jwt.sign(token as JWT, secret) as any;
    },
    async decode({ secret, token }) {
      return jwt.verify(token as string, secret) as any;
    },
  },
  callbacks: {
    async jwt(params) {
      // When using the Credentials Provider the user object is the response returned from the authorize callback
      const { token, user } = params;
      return { ...token, ...user };
    },
    async session(params) {
      // token is things returned from jwt callback
      const { token } = params;
      return { ...token } as Session;
    },
  },
  pages: {
    error: '/signin',
    signIn: '/signin',
    signOut: '/signout',
  },
});
