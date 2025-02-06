const Quiz = require('../models/Quiz');
const Result = require('../models/Result');

exports.submitQuiz = async (req, res) => {
  try {
    const { quizId, answers } = req.body;

    console.log('quizId: ', quizId);
    console.log('req.body: ', req.body);

    const quiz = await Quiz.findById(quizId);
    console.log('Fetched Quiz:', quiz);

    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }

    const correctAnswersArray = quiz.questions.map((question) => question.correctAnswer);
    console.log('correctAnswersArray: ', correctAnswersArray);

    let correctAnswers = 0;
    let incorrectAnswers = 0;

    // Iterate through the answers and compare them to the correct answers
    for (let i = 0; i < correctAnswersArray.length; i++) {

      // Check if the answer is "none" or incorrect
      if (answers[i] === "none") {
        incorrectAnswers++;
      } else if (correctAnswersArray[i] !== answers[i]) {
        incorrectAnswers++;
      } else {
        correctAnswers++;
      }
    }

    const totalPercentage = (correctAnswers / correctAnswersArray.length) * 100;
    const passFail = totalPercentage >= quiz.passingCriteria ? 'pass' : 'fail';

    const result = {
      userId: req.user.userId,
      quizId: quiz._id,
      totalScore: correctAnswers,
      totalQuestions: correctAnswersArray.length,
      totalPercentage,
      passFail, 
      correctAnswer: correctAnswers,
      incorrectAnswer: incorrectAnswers
    };

    console.log('result: ', result);

    const savedResult = await Result.create(result);

    return res.status(200).json({
      message: "Quiz submitted successfully",
      result: savedResult,
    });

  } catch (error) {
    console.error('Error in submitQuiz:', error);
    return res.status(500).json({ error: "An error occurred while submitting the quiz" });
  }
};




exports.getAllsubmitQuiz = async (req, res) => {
  try {
    const results = await Result.find().populate('userId quizId', 'fullName username email title description');

    if (results.length === 0) {
      return res.status(404).json({ error: "No quiz submissions found" });
    }

    return res.status(200).json({
      message: "Quiz submissions fetched successfully",
      results,
    });

  } catch (error) {
    console.error('Error in getAllsubmitQuiz:', error);
    return res.status(500).json({ error: "An error occurred while fetching quiz submissions" });
  }
};


exports.getResultById = async (req, res) => {
  try {
    const { resultId } = req.params;

    // Validate if the resultId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(resultId)) {
      return res.status(400).json({ error: 'Invalid resultId format' });
    }

    console.log('Fetching result with resultId:', resultId);

    const result = await Result.findById(resultId)
      .populate('userId quizId', 'fullName username email title description');

    if (!result) {
      return res.status(404).json({ error: 'Result not found' });
    }

    // Return the result
    return res.status(200).json({
      message: 'Result fetched successfully',
      data: result,  // Wrap result in "data" key
    });

  } catch (error) {
    console.error('Error in getResultById:', error);
    return res.status(500).json({ error: 'An error occurred while fetching the result' });
  }
};
