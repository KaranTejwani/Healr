import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to users collection
    required: true
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DoctorAccounts', // Reference to doctorAccounts collection
    required: true
  },
  appointmentDate: {
    type: Date,
    required: true
  },
  timeSlot: {
    type: String, // e.g., "10:00 AM - 10:30 AM"
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  reason: {
    type: String // Reason for visit (optional)
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;
