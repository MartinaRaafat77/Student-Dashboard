import express from 'express';
import {   getAllAnnouncements,addAnnouncement,updateAnnouncement,deleteAnnouncement,deleteMultipleAnnouncements } from '../controllers/announcementController.js';

const router = express.Router();
router.get('/',getAllAnnouncements);
router.post('/', addAnnouncement); 
router.delete('/:id',deleteAnnouncement);
router.put('/:id', updateAnnouncement); 
router.delete('/delete-multiple', deleteMultipleAnnouncements); 

export default router;
