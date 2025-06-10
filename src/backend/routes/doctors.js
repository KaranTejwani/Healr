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

router.get('/selectedSearch', async (req, res) => {
  const { specialization, location } = req.query;

  if (!specialization || !location) {
    return res.status(400).json({ error: "Both specialization and location are required" });
  }

  try {
    const doctors = await Doctor.find({
      Specialization: specialization,
      Location: location,
    });

    res.json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
