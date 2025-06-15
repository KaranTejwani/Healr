// routes/medicalRecords.js
import express from 'express';
import MedicalRecord from '../models/MedicalRecord.js';

const router = express.Router();

// Get complete medical history for a patient
router.get('/patient/complete-history', async (req, res) => {
  try {
    const { phone, name, patientId } = req.query;
    
    let query = {};
    if (patientId) {
      query.patientId = patientId;
    } else if (phone || name) {
      query = {
        $or: [
          { 'patientInfo.phone': phone },
          { 'patientInfo.name': { $regex: name, $options: 'i' } }
        ]
      };
    }
    
    const medicalRecord = await MedicalRecord.findOne(query)
      .populate('prescriptions');
    
    res.json({ medicalRecord });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch medical history' });
  }
});

export default router;