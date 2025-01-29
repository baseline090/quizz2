const Quiz = require('../models/Quiz');

// Add a new quiz
exports.addQuiz = async (req, res) => {
  
    const { title, description, questions, totalTime, passingCriteria, scorePerQuestion, totalPercentage} = req.body;
    console.log("Request Body:", req.body);

    // Fixed the condition to use "&&"
    if (!title || !description || !questions || !totalTime || !passingCriteria || !scorePerQuestion || !totalPercentage) {
        return res.status(400).json({ error: "All fields are required" });
    }

    if (!Array.isArray(questions) || questions.length === 0) {
        return res.status(400).json({ error: "Questions should be a non-empty array" });
    }

    try {
        const adjustedScorePerQuestion = scorePerQuestion || 1; // Default score per question if not provided

        // Function to calculate passing score based on passingCriteria percentage
        const calculatePassingScore = (totalQuestions, scorePerQuestion, passingCriteria) => {
            const totalPossibleScore = totalQuestions * scorePerQuestion; // Total possible score
            const passingScore = (passingCriteria / 100) * totalPossibleScore; // Passing score based on the percentage
            return passingScore;
        };

        // Calculate the passing score
        const passingScore = calculatePassingScore(questions.length, adjustedScorePerQuestion, passingCriteria);
        const quiz = new Quiz({
            title,
            description,
            questions,
            totalTime,
            passingCriteria,
            scorePerQuestion: passingScore,
            isAvailable: true,
            totalPercentage
        });

        console.log('Quiz Object:', quiz); 

        const savedQuiz = await quiz.save();
        res.status(201).json(savedQuiz); 
    } catch (error) {
        console.error("Error while saving quiz:", error);
        // Optionally add error details
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
    console.log('Quiz ID:', id); 

    try {
        const deletedQuiz = await Quiz.findByIdAndDelete(id);
        console.log('Deleted Quiz:', deletedQuiz); 

        if (!deletedQuiz) {
            return res.status(404).json({ status: 'error', error: 'Quiz not found' });
        }

        res.status(200).json({ status: 'success', message: 'Quiz deleted successfully' });
    } catch (error) {
        console.error("Error while deleting quiz:", error);
        res.status(500).json({ status: 'error', error: 'An error occurred while deleting the quiz' });
    }
};
