// quizController.js

const Quiz = require('../models/Quiz');

// Add a new quiz
exports.addQuiz = async (req, res) => {
  const { title, description, questions, totalTime, passingCriteria, scorePerQuestion, totalPercentage, categories } = req.body;

  if (!title || !description || !questions || !totalTime || !passingCriteria || !scorePerQuestion || !totalPercentage || !categories) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!Array.isArray(questions) || questions.length === 0) {
    return res.status(400).json({ error: "Questions should be a non-empty array" });
  }

  if (!questions.every(q => q.text && Array.isArray(q.options) && q.options.length && q.correctAnswer)) {
    return res.status(400).json({ error: "Each question must have text, options (non-empty array), and correctAnswer" });
  }

  if (!Array.isArray(categories) || categories.length === 0) {
    return res.status(400).json({ error: "Categories should be a non-empty array" });
  }

  if (typeof totalTime !== 'number' || totalTime <= 0) {
    return res.status(400).json({ error: "Total time must be a positive number" });
  }

  if (typeof passingCriteria !== 'number' || passingCriteria <= 0 || passingCriteria > 100) {
    return res.status(400).json({ error: "Passing criteria must be between 1 and 100" });
  }

  if (typeof totalPercentage !== 'number' || totalPercentage < 0 || totalPercentage > 100) {
    return res.status(400).json({ error: "Total percentage must be between 0 and 100" });
  }

  try {
    const adjustedScorePerQuestion = scorePerQuestion || 1;

    const calculatePassingScore = (totalQuestions, scorePerQuestion, passingCriteria) => {
      const totalPossibleScore = totalQuestions * scorePerQuestion;
      const passingScore = (passingCriteria / 100) * totalPossibleScore;
      return passingScore;
    };

    const passingScore = calculatePassingScore(questions.length, adjustedScorePerQuestion, passingCriteria);

    const quiz = new Quiz({
      title,
      description,
      questions,
      totalTime,
      passingCriteria,
      scorePerQuestion: passingScore,
      isAvailable: true,
      totalPercentage,
      categories
    });

    const savedQuiz = await quiz.save();
    res.status(201).json(savedQuiz);
  } catch (error) {
    console.error("Error while saving quiz:", error);
    res.status(500).json({ error: "An error occurred while saving the quiz", details: error.message });
  }
};

// Get all quizzes
exports.getAllQuiz = async (req, res) => {
  try {
    const quizzes = await Quiz.find();

    if (!quizzes.length) {
      return res.status(404).json({ error: 'No quizzes found' });
    }

    res.status(200).json(quizzes);
  } catch (error) {
    console.error("Error while fetching quizzes:", error);
    res.status(500).json({ error: 'An error occurred while fetching quizzes' });
  }
};

// Delete a quiz by ID
exports.deleteQuiz = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedQuiz = await Quiz.findByIdAndDelete(id);

    if (!deletedQuiz) {
      return res.status(404).json({ status: 'error', error: 'Quiz not found' });
    }

    res.status(200).json({ status: 'success', message: 'Quiz deleted successfully' });
  } catch (error) {
    console.error("Error while deleting quiz:", error);
    res.status(500).json({ status: 'error', error: 'An error occurred while deleting the quiz' });
  }
};