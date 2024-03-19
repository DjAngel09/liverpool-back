import dotenv from 'dotenv';
import app from './app.js';
import { connectDB } from './db.js';


dotenv.config();

async function main() {
  try {
    await connectDB();
    app.listen(process.env.PORT);
    console.log(`Listening on port http://localhost:${process.env.PORT}`);
  } catch (error) {
    console.error(error);
  }
}

main();