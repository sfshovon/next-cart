import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database Connected');
  } 
  catch (error) {
    console.error('Database Connection Failed', error);
  }
};

export default connectDB;