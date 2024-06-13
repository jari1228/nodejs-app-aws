import { MongoClient } from "mongodb";
import dotenv from "dotenv";

const password = encodeURIComponent(secrets.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://jarishing:${password}@learning.x5xukp1.mongodb.net/?retryWrites=true&w=majority&appName=learning`; // clustore url
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("integration_ninjas");
export default db;
