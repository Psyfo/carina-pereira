// src/lib/auth/auth.ts
'use server';

import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/auth/authOptions';

export async function getAuthSession() {
  return await getServerSession(authOptions);
}
