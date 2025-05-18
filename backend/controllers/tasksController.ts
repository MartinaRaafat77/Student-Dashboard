import Tasks from '../models/Tasks';
import {Request, Response} from 'express';

export const getAllTasks = async (req: Request,res:Response)=>
{
    try{
    const tasks = await Tasks.find();
    res.json(tasks);
     } catch (err) {
    console.error('Error fetching tasks:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
export const addTask = async (req: Request, res: Response) => {
  try {
    const task = new Tasks(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: 'Not found' });
  }
};
export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updated = await Tasks.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ message: "Tasks not found" });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: "Update failed" });
  }
};
export const deleteTasks = async (req: Request, res: Response) => {
  try {
    await Tasks.deleteMany({});
    res.status(200).json({ message: "All announcements deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};