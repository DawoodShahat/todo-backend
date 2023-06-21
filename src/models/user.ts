import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'task' }]
}, { timestamps: true })

export const User = mongoose.model('user', userSchema); 