// server/models/TestSession.js
const mongoose = require('mongoose');

const testSessionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    required: true
  },
  jurisdiction: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    default: Date.now
  },
  endTime: Date,
  questions: [{
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question'
    },
    userAnswer: Number,
    isCorrect: Boolean,
    timeSpent: Number
  }],
  status: {
    type: String,
    enum: ['in-progress', 'completed'],
    default: 'in-progress'
  },
  score: {
    type: Number,
    default: 0
  }
});

// Methods
testSessionSchema.methods.submitAnswer = async function(questionId, answer, timeSpent) {
  const question = await mongoose.model('Question').findById(questionId);
  const isCorrect = question ? question.correctOption === answer : false;

  this.questions.push({
    question: questionId,
    userAnswer: answer,
    isCorrect,
    timeSpent
  });

  return this.save();
};

testSessionSchema.methods.completeSession = async function() {
  this.endTime = new Date();
  this.status = 'completed';
  
  // Calculate score
  const totalQuestions = this.questions.length;
  const correctAnswers = this.questions.filter(q => q.isCorrect).length;
  this.score = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;

  await this.save();
  return {
    score: this.score,
    totalQuestions,
    correctAnswers,
    timeSpent: this.endTime - this.startTime
  };
};

module.exports = mongoose.model('TestSession', testSessionSchema);