import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  // If the database is already connected, don't connect again
  if (connected) {
    console.log('MongoDB is already connected...');
    return;
  }

  // Connect to MongoDB
  try {
   
    await mongoose.connect("mongodb+srv://akashelhance:koikoikoi@cluster0.6t6ako7.mongodb.net/propertypulse?retryWrites=true&w=majority&appName=Cluster0");
    connected = true;
    console.log('MongoDB connected...');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;