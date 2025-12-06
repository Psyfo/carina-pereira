import CredentialsProvider from 'next-auth/providers/credentials';

import { User } from '@/models/User';
import { validateUser } from '@/services/authService';

import logger from '../logger';

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
        if (!isValid) {
          logger.warn(`Invalid credentials for user ${email}`);
          return null;
        }
        logger.info(`User ${email} authenticated successfully`);

        // Fetch user details for session
        const user = await User.findOne({ email });
        if (!user) {
          logger.warn(`User ${email} not found in database`);
          return null;
        }
        logger.info(`User ${email} found in database`);

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
  // pages: {
  //   signIn: '/login', // Commented out - will be recreated when admin dashboard is rebuilt
  // },
};
