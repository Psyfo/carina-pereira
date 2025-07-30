import { deleteUser, getUserByEmail, updateUser } from '@/services/userService';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const user = await getUserByEmail(params.id);
  return Response.json(user);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const user = await updateUser(params.id, data);
  return Response.json(user);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await deleteUser(params.id);
  return Response.json({ success: true });
}
