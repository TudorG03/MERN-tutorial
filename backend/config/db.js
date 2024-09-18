import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}