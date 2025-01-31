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

    for (let i = 0; i < correctAnswersArray.length; i++) {
      if (correctAnswersArray[i] === answers[i]) {
        correctAnswers++;
      }
    }

    const totalPercentage = (correctAnswers / correctAnswersArray.length) * 100;
    
    const passFail = totalPercentage >= quiz.passingCriteria ? 'pass' : 'fail';
    const incorrectAnswers = correctAnswersArray.length - correctAnswers;

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
    console.log('resultId: ', resultId);

    const result = await Result.findById(resultId).populate('userId quizId', 'fullName username email title description');
    console.log('result: ', result);

    if (!result) {
      return res.status(404).json({ error: "Result not found" });
    }

    return res.status(200).json({
      message: "Result fetched successfully",
      result,
    });

  } catch (error) {
    console.error('Error in getResultById:', error);
    return res.status(500).json({ error: "An error occurred while fetching the result" });
  }
};

// exports.getAllsubmitQuizById = async (req, res) => {
//   try {
//     const { userId, quizId } = req.params;  // Get userId and quizId from params
//     console.log('quizId: ', quizId);
//     console.log('userId: ', userId);

//     // Fetch results based on userId and quizId
//     const results = await Result.find({
     
//       userId: userId,
//       quizId: quizId
//     }).populate('userId quizId', 'fullName username email title description');
//     console.log('results: ', results);
//     if (results.length === 0) {
//       return res.status(404).json({ error: "No quiz submissions found for the given user or quiz" });
//     }

//     return res.status(200).json({
//       message: "Quiz submission fetched successfully",
//       results,
//     });

//   } catch (error) {
//     console.error('Error in getAllsubmitQuizById:', error);
//     return res.status(500).json({ error: "An error occurred while fetching quiz submission by ID" });
//   }
// };
