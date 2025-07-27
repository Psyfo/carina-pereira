import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import type { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};

        // 🔐 Replace with your actual DB logic
        if (email === 'admin@example.com' && password === 'securepass') {
          return { id: '1', name: 'Admin User', email };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login', // Optional: use your custom login page
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
