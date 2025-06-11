import express from 'express';
import mongoose from 'mongoose';
import DoctorAccounts from '../models/doctorAccounts.js';

const router = express.Router();

// ✅ Get all doctor accounts
router.get('/', async (req, res) => {
  try {
    const doctors = await DoctorAccounts.find();
    res.json(doctors);
  } catch (err) {
    console.error('Error fetching doctor accounts:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ✅ Get a doctor by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid doctor ID' });
  }

  try {
    const doctor = await DoctorAccounts.findById(id);
    if (!doctor) return res.status(404).json({ error: 'Doctor not found' });
    res.json(doctor);
  } catch (err) {
    console.error('Error fetching doctor by ID:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ✅ Register a new doctor
router.post('/register', async (req, res) => {
  try {
    const doctor = new DoctorAccounts(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (err) {
    console.error('Error registering doctor:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ✅ Update a doctor's profile
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid doctor ID' });
  }

  try {
    const updatedDoctor = await DoctorAccounts.findByIdAndUpdate(
      id,
      { ...req.body, updatedAt: new Date() },
      { new: true }
    );
    res.json(updatedDoctor);
  } catch (err) {
    console.error('Error updating doctor:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ✅ Delete a doctor account
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid doctor ID' });
  }

  try {
    await DoctorAccounts.findByIdAndDelete(id);
    res.json({ message: 'Doctor deleted successfully' });
  } catch (err) {
    console.error('Error deleting doctor:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ✅ Search doctors by specialization or location
router.get('/search/filter', async (req, res) => {
  const { specialization, location } = req.query;

  let query = {};
  if (specialization) query['profile.specialization'] = specialization;
  if (location) query['profile.location'] = location;

  try {
    const doctors = await DoctorAccounts.find(query);
    res.json(doctors);
  } catch (err) {
    console.error('Error filtering doctors:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
