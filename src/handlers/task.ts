import mongoose from "mongoose";
import { Task } from "../models/task";

export const getAllTasks = async (req, res) => {
  const { id } = req.user;
  const tasks = await Task.find({ owner: new mongoose.Types.ObjectId(id) });
  res.json({ data: tasks });
}

export const createNewTask = async (req, res) => {
  const { message } = req.body;
  const task = await Task.create({
    owner: req.user.id,
    message
  })
  res.json({ task })
}

export const deleteTask = async (req, res) => {
  const task = await Task.deleteOne({ _id: req.params.id })
  res.json({ data: task });
}

export const updateTask = async (req, res) => {
  const { complete } = req.body;
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, { complete });
  res.json({ data: task });
}
