import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import doctorsRoute from './routes/doctors.js';
import authRoute from './routes/auth.js'; // NEW

dotenv.config();
const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { dbName: 'healrDB' })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Error:', err));

// Routes
app.use('/api/doctors', doctorsRoute);
app.use('/api/auth', authRoute); // NEW

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
