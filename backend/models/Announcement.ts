import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
    id: String,
 senderName: { type: String, required: true },
  senderRole: { type: String, required: true },
  content: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

export default mongoose.model('Announcement', announcementSchema);