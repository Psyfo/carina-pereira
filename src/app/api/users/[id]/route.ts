import { NextRequest } from 'next/server';

import { deleteUser, getUserByEmail, updateUser } from '@/services/userService';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop()!;
  const user = await getUserByEmail(id);
  return Response.json(user);
}

export async function PUT(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop()!;
  const data = await req.json();
  const user = await updateUser(id, data);
  return Response.json(user);
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop()!;
  await deleteUser(id);
  return Response.json({ success: true });
}
