// export auth functions
import bcrypt from 'bcryptjs';

import { connectDB } from '@/lib/db/mongodb';
import { User } from '@/models/User';

export async function registerUser(email: string, password: string) {
  await connectDB();
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
  return user.save();
}

export async function validateUser(email: string, password: string) {
  //await connectDB();
  const user = await User.findOne({ email });
  if (!user) return false;
  const isMatch = await bcrypt.compare(password, user.password);
  return isMatch;
}

export async function getUserById(id: string) {
  await connectDB();
  return User.findById(id);
}
