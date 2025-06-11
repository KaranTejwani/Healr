import mongoose from 'mongoose';

const doctorAccountsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'doctor' },
  profile: {
    specialization: [String],
    highestDegree: String,
    degrees: [String],
    experience: Number,
    fee: Number,
    waitTime: String,
    numberOfPatients: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    location: String,
    availableSlots: [
      {
        day: String,
        time: String
      }
    ],
    verified: { type: Boolean, default: false },
    profilePicture: String
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const DoctorAccounts = mongoose.model('DoctorAccounts', doctorAccountsSchema);
export default DoctorAccounts;

