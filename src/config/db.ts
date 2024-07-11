import mongoose from 'mongoose';

const connectDB = async () => {
  console.log('Connecting to MongoDB :', process.env.MONDODB_URI)
  return mongoose.connect(process.env.MONDODB_URI as string)
}

export default connectDB;