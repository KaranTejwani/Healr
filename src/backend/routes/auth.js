import express from 'express';
import User from '../models/User.js';
import DoctorAccounts from '../models/doctorAccounts.js';

const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, role, gender } = req.body;

    if (role === 'doctor') {
      const existingDoctor = await DoctorAccounts.findOne({ email });
      if (existingDoctor) {
        return res.status(400).json({ error: 'Doctor already exists' });
      }

      const doctor = new DoctorAccounts({
        name,
        email,
        password,
        role: 'doctor',
        profile: {
          specialization: [],
          highestDegree: '',
          degrees: [],
          experience: 0,
          fee: 0,
          waitTime: '',
          numberOfPatients: 0,
          rating: 0,
          location: '',
          availableSlots: [],
          verified: false,
          profilePicture: ''
        }
      });

      await doctor.save();
      return res.status(201).json({ message: 'Doctor created successfully', doctor });

    } else {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const user = new User({ name, email, password, role: 'patient' });
      await user.save();
      return res.status(201).json({ message: 'User created successfully', user });
    }

  } catch (err) {
    console.error('Signup Error:', err);
    res.status(500).json({ error: 'Signup failed' });
  }
});

// Login (common for both)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      return res.status(200).json({ message: 'Login successful', user });
    }

    const doctor = await DoctorAccounts.findOne({ email, password });
    if (doctor) {
      return res.status(200).json({ message: 'Login successful', doctor });
    }

    return res.status(400).json({ error: 'Invalid credentials' });

  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ error: 'Login failed' });
  }
});

export default router;