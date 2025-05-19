import Announcement from '../models/Announcement';
import { Request ,Response } from 'express';
import mongoose from 'mongoose';

export const getAllAnnouncements = async (req: Request, res:Response) => {
    try{
    const announcements = await Announcement.find();
    res.json(announcements);
 } catch (err) {
    console.error('Error fetching announcements:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
export const deleteMultipleAnnouncements = async (req: Request, res: Response) => {
  try {
    const { ids } = req.body;
    await Announcement.deleteMany({ _id: { $in: ids } });
    res.status(200).json({ message: 'Announcements deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete announcements' });
  }
};
export const deleteAnnouncement = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    const deleted = await Announcement.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Announcement not found' });
    }

    res.status(200).json({ message: 'Announcement deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ message: 'Failed to delete' });
  }
};
export const addAnnouncement = async (req: Request, res: Response) => {
  try {
    const announcement = new Announcement(req.body);
    await announcement.save();
    res.status(201).json(announcement);
  } catch (error) {
    res.status(400).json({ message: 'Not found' });
  }
};
export const updateAnnouncement = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updated = await Announcement.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ message: "Announcement not found" });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: "Update failed" });
  }
};