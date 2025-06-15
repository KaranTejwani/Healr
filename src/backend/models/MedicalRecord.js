import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  patientInfo: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    age: { type: Number },
    gender: { type: String }
  },
  
  // Medical History
  prescriptions: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Prescription' 
  }],
  
  // Vital Signs History
  vitals: [{
    date: { type: Date, default: Date.now },
    bloodPressure: { type: String },
    heartRate: { type: Number },
    temperature: { type: Number },
    weight: { type: Number },
    height: { type: Number }
  }],

  // Allergies and Medical Conditions
  allergies: [{ type: String }],
  chronicConditions: [{ type: String }],
  currentMedications: [{ type: String }],
  
  // Emergency Contact
  emergencyContact: {
    name: { type: String },
    phone: { type: String },
    relationship: { type: String }
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);
export default MedicalRecord;