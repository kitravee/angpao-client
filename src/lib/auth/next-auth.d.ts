declare global {
  declare module 'next-auth' {
    // interface User extends Record<string, unknown>, DefaultUser {}

    interface Session {
      access_token: string;
      iat: number;
      name: string;
      statusCode: number;
      userType: string;
    }
  }
}
