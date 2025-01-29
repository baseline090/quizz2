const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

// ----- Controllers
const adminController = require("../controllers/adminController");
const quizController1 = require("../controllers/quiz1Controller");

//------ Middleware for authentication
const auth = require("../middleware/auth");



//------------Admin Routes---------------------------------//

// Admin Registration Route
router.post(
  "/admin/register",
  [
    body("email").isEmail().withMessage("Email is invalid"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("confirmPassword")
      .exists()
      .withMessage("Please confirm your password"),
  ],
  adminController.registerAdmin
);

// Admin Login Route
router.post(
  "/admin/login",
  [
    body("email").isEmail().withMessage("Email is invalid"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  adminController.loginAdmin
);

// --------  Create POST Quiz
router.post("/admin/quiz", auth(["admin"]), quizController1.addQuiz);

// --------  Get all quizzes
router.get('/admin/quizzes', auth(["admin"]), quizController1.getAllQuiz);

// --------  Delete a quiz by ID
router.delete('/admin/quiz/:id', auth(["admin"]), quizController1.deleteQuiz);

module.exports = router;
