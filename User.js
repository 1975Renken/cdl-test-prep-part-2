// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    unique: true, 
    sparse: true 
  },
  phone: { 
    type: String, 
    unique: true, 
    sparse: true 
  },
  verificationCode: String,
  verificationCodeExpires: Date,
  isVerified: { 
    type: Boolean, 
    default: false 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  lastLogin: Date,
  testHistory: [{
    testId: String,
    score: Number,
    date: Date,
    questionsAttempted: Number,
    correctAnswers: Number,
    categoryPerformance: Map
  }]
});

module.exports = mongoose.model('User', userSchema);