import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // ✅ Load environment variables first!

const connectDB = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI); // ✅ Debugging log
    if (!process.env.MONGO_URI) throw new Error("MONGO_URI is undefined!");

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export { connectDB };
