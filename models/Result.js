const mongoose = require('mongoose');






const resultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz', // Reference to the Quiz model
    required: true,
  },
  correctAnswer:{
    type: Number,
    required: true,
  },
  totalScore: {
    type: Number,
    required: true,
  },
  incorrectAnswer:{
    type: Number,
    required: true,
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
  totalPercentage: {
    type: Number,
    required: true,
  },
  passFail: {
    type: String,
    enum: ['pass', 'fail'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
 
});

module.exports = mongoose.model('Result', resultSchema);
