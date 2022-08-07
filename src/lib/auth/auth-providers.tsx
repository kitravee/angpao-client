import CredentialsProvider from 'next-auth/providers/credentials';

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
];
