
import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'user' },
  message: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
    required: true
  },
}, {timestamps: true})

export const Task = mongoose.model('task', taskSchema);