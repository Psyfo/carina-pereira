import { NextResponse } from 'next/server';

import { connectDB } from '@/lib/db/mongodb';
import { seedAdminUser } from '@/services/seedAdminUser';

export async function POST() {
  try {
    await connectDB();
    await seedAdminUser();
    return NextResponse.json({ success: true, message: 'Database seeded.' });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Seeding failed.',
        error: error instanceof Error ? error.message : error,
      },
      { status: 500 }
    );
  }
}
