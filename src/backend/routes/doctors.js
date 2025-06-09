import express from 'express';
import Doctor from '../models/Doctor.js';

const router = express.Router();

// Get all doctors
router.get('/', async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

// Filter doctors
router.get('/search', async (req, res) => {
  const { specialization, location } = req.query;
  const filter = {};
  if (specialization) filter.Specialization = specialization;
  if (location) filter.Location = location;

  const doctors = await Doctor.find(filter);
  res.json(doctors);
});

export default router;
