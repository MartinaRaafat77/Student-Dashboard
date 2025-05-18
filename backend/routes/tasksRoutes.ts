import express from 'express';
import { getAllTasks, addTask,updateTask,deleteTasks } from '../controllers/tasksController';

const router = express.Router();
router.get('/',getAllTasks);
router.post('/', addTask); 
router.put('/:id', updateTask);
router.delete('/', deleteTasks); 
export default router;