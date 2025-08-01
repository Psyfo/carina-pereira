import { NextRequest } from 'next/server';

import { createUser, getAllUsers } from '@/services/userService';

export async function GET() {
  const users = await getAllUsers();
  return Response.json(users);
}

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const user = await createUser(email, password);
  return Response.json(user);
}
