import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import doctorsRoute from './routes/doctors.js';

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { dbName: 'healrDB' })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Error:', err));

app.use('/api/doctors', doctorsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
