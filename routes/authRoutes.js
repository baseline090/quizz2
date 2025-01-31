const express = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/userController");
const userQuesController = require("../controllers/userQuesController");
const adminController = require("../controllers/adminController");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("multer");
const Category = require("../models/Category"); // Import the Category model
const categoryController = require("../controllers/cateogryController");
const resultController = require("../controllers/resultController");

// Set up multer to handle image upload
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // Limit to 2 MB
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("Only image files are allowed!"), false);
    }
    cb(null, true);
  },
});

//--------------------------User Routes----------------------------------//////

// User Registration Route
router.post(
  "/register",
  [
    body("fullName").notEmpty().withMessage("Full name is required"),
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Email is invalid"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  userController.register
);

// User Login Route
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Email is invalid"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  userController.login
);

// Route for sending OTP
router.post("/forgotpassword", userController.forgotPassword);

// Route for verifying OTP
router.post("/verifyotp", userController.verifyOtp);

// Route for resetting password
router.post("/resetpassword", userController.resetPassword);

// User Profile Update Route (protected)
router.put(
  "/user/profile/update",
  auth(["user"]),
  userController.updateProfile
);

//------ Create quiz route
router.get("/user/quizdata", auth(["user"]), userQuesController.getAllUserQuiz);

//------ Create quiz route
router.get(
  "/user/quizzesID/:id",
  auth(["user"]),
  userQuesController.getQuizById
);


// Category routes
router.post('/user/addcategories',auth(["user"]), categoryController.addCategory);
router.get("/user/allcategories", auth(["user"]), categoryController.getAllCategories);
router.delete('/user/delete/categories',auth(["user"]), categoryController.deleteCategory);
router.get('/user/categories/:categoryId', auth(['user']), categoryController.getCategoryById);
router.get('/user/categories/:categoryId/quizzes', auth(['user']), categoryController.getQuesCategoryById);

// User Profile Route (protected)
router.get("/user/profile", auth(["user"]), userController.getUserProfile);





// // Apply the JWT authentication middleware
// router.post('/submit/quiz', authenticateJWT, submitQuiz);




router.post("/user/profile", auth(["user"]), userController.getUserProfile);


router.post("/submit/quiz", auth(["user"]), resultController.submitQuiz);

// Fetch all quiz submissions
router.get('/all-submissions', auth(["user"]), resultController.getAllsubmitQuiz);
// Fetch all quiz submissions

// router.get('/quiz/results/:userId/:quizId', resultController.getAllsubmitQuizById);
router.get('/result/:resultId', resultController.getResultById);

router.post("/logout", userController.logout);

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

// Admin Routes for getting all Users (protected)
router.get("/admin/users", auth(["admin"]), adminController.getAllUsers);

// Admin Route for Deleting a User (protected)
router.delete(
  "/admin/user/delete",
  auth(["admin"]),
  adminController.deleteUser
);

// Admin Routes for Category Management (protected)
// router.get(
//   "/admin/category",
//   auth(["admin"]),
//   categoryController.getAllCategories
// );

// Admin Route for Adding a Category (protected)
router.post(
  "/admin/category/add",
  auth(["admin"]),
  categoryController.addCategory
);

// Admin Route for Deleting a Category (protected)
router.delete(
  "/admin/category/delete",
  auth(["admin"]),
  categoryController.deleteCategory
);


router.post("/admin/logout", adminController.adminLogout);

module.exports = router;
