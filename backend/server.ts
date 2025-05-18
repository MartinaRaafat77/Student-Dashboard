import app from './app.js'; 
import mongoose from 'mongoose';

const PORT = 5000;

mongoose.connect('mongodb://127.0.0.1:27017/coligo')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });