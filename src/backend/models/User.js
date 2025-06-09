import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['patient', 'doctor', 'admin'],
    default: 'patient' // most common role
  }
});

export default mongoose.model('User', userSchema);
