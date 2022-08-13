import CredentialsProvider from 'next-auth/providers/credentials';

import { getAuthHeader } from '@/utils/auth-header';

import AgApi from '../ag-axios';

export const authProviders = [
  CredentialsProvider({
    id: 'email-password-credentials',
    name: 'Email Password',
    credentials: {
      username: {
        type: 'email',
        label: 'username',
      },
      password: {
        type: 'text',
        label: 'password',
      },
    },

    async authorize(credentials) {
      try {
        const { data: responseData } = await AgApi.post(`/auth/login`, {
          username: credentials?.username,
          password: credentials?.password,
        });

        return responseData;
      } catch (err: any) {
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw err;
      }
    },
  }),

  CredentialsProvider({
    id: 'refresh-token',
    name: 'Email Password',
    credentials: {
      accessToken: {
        type: 'string',
        label: 'string',
      },
    },

    async authorize(credentials) {
      try {
        const { data: responseData } = await AgApi.post(
          `/auth/refresh-token`,
          undefined,
          { headers: { ...getAuthHeader(credentials?.accessToken) } },
        );

        return responseData;
      } catch (err: any) {
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw err;
      }
    },
  }),
];
