import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB is connected");
    } catch (error) {
        console.error(error);
    }
};