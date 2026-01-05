import { MongoClient } from 'mongodb';

// 1. Get MongoDB connection string from environment variable
const uri = process.env.MONGODB_URI;

// 2. Throw error if URI is missing (MONGODB_URI not set in .env.local)
if (!uri) {
  throw new Error('Please add MONGODB_URI to .env.local');
}

// 3. Create a new MongoDB client instance
const client = new MongoClient(uri);

// 4. Connect to MongoDB and get a promise
const clientPromise = client.connect();

// 5. Export the connection promise
export default clientPromise;