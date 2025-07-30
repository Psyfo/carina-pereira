import CredentialsProvider from 'next-auth/providers/credentials';

import { User } from '@/models/User';
import { validateUser } from '@/services/authService';

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
        if (!email || !password) return null;

        // Use your service to validate user
        const isValid = await validateUser(email, password);
        if (!isValid) return null;

        // Fetch user details for session
        const user = await User.findOne({ email });
        if (!user) return null;

        return {
          id: user._id.toString(),
          name: user.email,
          email: user.email,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
};
