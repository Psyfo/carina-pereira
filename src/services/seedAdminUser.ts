import bcrypt from 'bcryptjs';

import logger from '@/lib/logger';
import { User } from '@/models/User';

export async function seedAdminUser() {
  const adminEmail = 'admin@carinapereira.com';
  const adminPassword = '12345678'; // Change this before production!
  const existing = await User.findOne({ email: adminEmail });
  if (!existing) {
    const hashed = await bcrypt.hash(adminPassword, 10);
    await User.create({ email: adminEmail, password: hashed });
    logger.info('Seeded default admin user');
  } else {
    logger.warn('Database already seeded: admin user exists');
  }
}
