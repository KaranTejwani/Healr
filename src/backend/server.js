import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // ✅ Import CORS

import doctorsRoute from './routes/doctors.js';
import authRoute from './routes/auth.js';

dotenv.config();
const app = express();

// Enable CORS for frontend (Vite default: localhost:5173)
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { dbName: 'healrDB' })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Error:', err));

// Routes
app.use('/api/doctors', doctorsRoute);
app.use('/api/auth', authRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
