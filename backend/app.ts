import express from 'express';
import mongoose from 'mongoose';

import cors from 'cors';
import announcementRoutes from './routes/announcementRoutes.js';
import tasksRoutes from './routes/tasksRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/announcements',announcementRoutes);
app.use('/api/tasks',tasksRoutes);

export default app;