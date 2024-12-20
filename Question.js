// server/models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: [
      'general_knowledge',
      'air_brakes',
      'combination_vehicles',
      'hazmat',
      'tanker',
      'doubles_triples',
      'passenger',
      'school_bus'
    ]
  },
  jurisdiction: {
    type: String,  // State code like 'CA', 'NY', etc.
    required: true
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'intermediate'
  },
  content: {
    text: {
      type: String,
      required: true
    },
    image: String,  // Optional URL to image if question has one
  },
  options: [{
    text: {
      type: String,
      required: true
    },
    isCorrect: {
      type: Boolean,
      required: true
    },
    explanation: String  // Explanation why this option is correct/incorrect
  }],
  explanation: {
    type: String,
    required: true  // General explanation for the correct answer
  },
  references: [{
    section: String,  // Reference to specific CDL manual section
    page: String
  }],
  metadata: {
    timeLimit: {
      type: Number,
      default: 90  // Time limit in seconds
    },
    pointsValue: {
      type: Number,
      default: 1
    },
    tags: [String],  // For categorizing questions by topics
    lastUpdated: {
      type: Date,
      default: Date.now
    }
  },
  statistics: {
    timesAnswered: {
      type: Number,
      default: 0
    },
    correctAnswers: {
      type: Number,
      default: 0
    },
    averageTimeSpent: {
      type: Number,
      default: 0  // Average time in seconds
    },
    difficultyRating: {
      type: Number,
      min: 0,
      max: 1,
      default: 0.5  // Calculated based on success rate
    }
  }
});

// Methods
questionSchema.methods.updateStatistics = async function(timeSpent, isCorrect) {
  const oldTotal = this.statistics.timesAnswered;
  const newTotal = oldTotal + 1;
  
  // Update average time spent
  this.statistics.averageTimeSpent = 
    ((this.statistics.averageTimeSpent * oldTotal) + timeSpent) / newTotal;
  
  // Update counters
  this.statistics.timesAnswered = newTotal;
  if (isCorrect) {
    this.statistics.correctAnswers += 1;
  }
  
  // Update difficulty rating based on success rate
  this.statistics.difficultyRating = 
    1 - (this.statistics.correctAnswers / this.statistics.timesAnswered);
  
  return this.save();
};

// Static methods
questionSchema.statics.getRandomQuestions = async function(params) {
  const {
    category,
    jurisdiction,
    difficulty,
    count = 10,
    excludeIds = []
  } = params;

  const query = {
    category,
    jurisdiction,
    _id: { $nin: excludeIds }
  };
  
  if (difficulty) {
    query.difficulty = difficulty;
  }

  return this.aggregate([
    { $match: query },
    { $sample: { size: count } }
  ]);
};

// Example questions validator
questionSchema.pre('save', function(next) {
  // Ensure at least one option is marked as correct
  const hasCorrectOption = this.options.some(option => option.isCorrect);
  if (!hasCorrectOption) {
    next(new Error('Question must have at least one correct option'));
  }
  
  // Ensure unique correct answer for non-multiple correct questions
  const correctOptions = this.options.filter(option => option.isCorrect);
  if (correctOptions.length > 1) {
    next(new Error('Question cannot have multiple correct answers'));
  }
  
  next();
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;