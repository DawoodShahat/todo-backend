import mongoose from 'mongoose';

export const initializeDB = async () => {
  return mongoose.connect(process.env.MONGODB_URI).catch(err => console.log('Error when connecting to db', err));
}