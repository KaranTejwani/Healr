import express from 'express';
import Doctor from '../models/Doctor.js';

const router = express.Router();

// Get all doctors
router.get('/', async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

// Filter doctors
// Example: routes/doctors.js or wherever your routes are defined
router.get('/search', async (req, res) => {
  const { search } = req.query;
  if (!search) return res.status(400).json({ error: "Search term required" });

  const regex = new RegExp(search, 'i'); // case-insensitive

  const doctors = await Doctor.find({
    $or: [
      { Name: regex },
      { Specialization: regex },
      { Location: regex },
    ]
  });

  res.json(doctors);
});

export default router;
