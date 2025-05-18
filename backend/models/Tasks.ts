import mongoose from "mongoose";

const tasksschema = new mongoose.Schema({
    id: String,
    type: { type: String, enum: ['quiz', 'assignment'], required: true },
    title: String,
    course: String,
    topic: String,
    dueDate: Date,
    completed: { type: Boolean, default: false }

});
export default mongoose.model('Tasks', tasksschema);