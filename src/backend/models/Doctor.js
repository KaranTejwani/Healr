import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  Name: String,
  Specialization: String,
  HighestDegree: String,
  Experience: String,
  Fee: String,
  Degrees: String,
  WaitTime: String,
  NumberOfPatients: String,
  Rating: String,
  Location: String
});

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;
