// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const options = {
//   useNewUrlParser: true,
// };

// let client;
// let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error("Add Mongo URI to .env.local");
// }

// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  heartbeatFrequencyMS: 10000, // Send a ping to check connectivity every 10 seconds
  bufferMaxEntries: 0,
  ssl: true,
  sslValidate: false, // For serverless environments
};

const client = new MongoClient(uri, options);

export async function POST(request) {
  try {
    await client.connect();
    const db = client.db('EchoLinks');
    
    // Your database operations here
    
    return Response.json({ success: true });
  } catch (error) {
    console.error('Database connection error:', error);
    return Response.json({ error: 'Database connection failed' }, { status: 500 });
  } finally {
    await client.close(); // Important: Close connection in serverless
  }
}