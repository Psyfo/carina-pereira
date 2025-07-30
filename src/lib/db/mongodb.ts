import mongoose from 'mongoose';

import { seedAdminUser } from '@/services/seedAdminUser';

// Select URI and DB name based on NODE_ENV
let uri: string | undefined;
let dbName: string | undefined;

if (process.env.NODE_ENV === 'production') {
  // Use production Docker MongoDB instance
  uri = process.env.MONGODB_PROD_URI;
  dbName = process.env.MONGODB_PROD_DB_NAME;
} else {
  // Use local development MongoDB
  uri = process.env.MONGODB_URI;
  dbName = process.env.MONGODB_DB_NAME;
}

if (!uri || !dbName) {
  throw new Error('Please add your MongoDB URI and DB name to .env.local');
}

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(uri as string, { dbName });
    isConnected = true;
    console.log(`MongoDB connected to ${dbName}`);
    await seedAdminUser(); // <-- Seed logic here
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}
