import mongoose from 'mongoose';

import logger from '../logger';

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

logger.info(`Using MongoDB URI: ${uri}`);

if (!uri || !dbName) {
  throw new Error('Please add your MongoDB URI and DB name to .env.local');
}

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;
  try {
    logger.info(`Connecting to MongoDB at ${uri} with DB name ${dbName}`);
    await mongoose.connect(uri as string, { dbName });
    isConnected = true;
    logger.info(`MongoDB connected to ${dbName}`);
  } catch (error) {
    logger.error('MongoDB connection error:', error);
    throw error;
  }
}
