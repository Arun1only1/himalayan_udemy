import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://abc:abc1234@school.b6qkdnb.mongodb.net/himalayan-udemy?retryWrites=true&w=majority&appName=School'
    );
    console.log('DB connection successful');
  } catch (error) {
    console.log('DB connection failed');
    console.log(error.message);
  }
};

export default connectDB;
