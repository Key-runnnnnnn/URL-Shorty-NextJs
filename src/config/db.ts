import mongoose from "mongoose";

const connectDB = async () => {
  console.log("Connecting to MongoDB ->>>>");
  return mongoose.connect(process.env.MONGODB_URI as string);
};

export default connectDB;
