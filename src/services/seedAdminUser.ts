import bcrypt from 'bcryptjs';

import { User } from '@/models/User';

export async function seedAdminUser() {
  const adminEmail = 'admin@carinpereira.com';
  const adminPassword = 'pass123!'; // Change this before production!
  const existing = await User.findOne({ email: adminEmail });
  if (!existing) {
    const hashed = await bcrypt.hash(adminPassword, 10);
    await User.create({ email: adminEmail, password: hashed });
    console.log('Seeded default admin user');
  } else {
    console.log('Database already seeded: admin user exists');
  }
}
