import { NextRequest } from 'next/server';

import { deleteUserByEmail, getUser, updateUserByEmail } from '@/services/userService';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop()!;
  const user = await getUser(id);
  return Response.json(user);
}

export async function PUT(req: NextRequest) {
  const email = req.nextUrl.pathname.split('/').pop()!;
  const data = await req.json();
  const updatedUser = await updateUserByEmail(email, data);
  return Response.json(updatedUser);
}

export async function DELETE(req: NextRequest) {
  const email = req.nextUrl.pathname.split('/').pop()!;
  await deleteUserByEmail(email);
  return Response.json({ success: true });
}
