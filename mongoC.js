import { MongoClient } from "mongodb";
import dotenv from 'dotenv';    
dotenv.config()
const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://hj67412200:${password}@devcluster.yg3wr6e.mongodb.net/?retryWrites=true&w=majority&appName=devcluster`; // clustore url
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("dev");
export default db;