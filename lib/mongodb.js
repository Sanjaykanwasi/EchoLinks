import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://sanjaykanwasi3:vKGt2k6Ru8Xx8n8m@echolinks.zvqyxdo.mongodb.net/echolinks?retryWrites=true&w=majority&appName=EchoLinks";

if (!uri) {
  throw new Error("Add Mongo URI to .env.local");
}

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Add Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
