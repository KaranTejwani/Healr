import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // Import CORS
import appointmentRoutes from './routes/appointments.js';
import authRoute from './routes/auth.js';
import doctorAccountsRoutes from './routes/doctorAccounts.js';

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
app.use('/api/auth', authRoute);
app.use('/api/doctorAccounts', doctorAccountsRoutes);
app.use('/api/appointments', appointmentRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
