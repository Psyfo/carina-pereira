import { connectDB } from '@/lib/db/mongodb';
import { User } from '@/models/User';

export async function createUser(email: string, password: string) {
  await connectDB();
  const user = new User({ email, password });
  return user.save();
}

export async function getUserByEmail(email: string) {
  await connectDB();
  return User.findOne({ email });
}

export async function updateUser(id: string, data: Partial<typeof User>) {
  await connectDB();
  return User.findByIdAndUpdate(id, data, { new: true });
}

export async function deleteUser(id: string) {
  await connectDB();
  return User.findByIdAndDelete(id);
}

export async function getAllUsers() {
  await connectDB();
  return User.find({});
}
