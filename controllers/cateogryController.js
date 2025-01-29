 const Category = require('../models/Category');
 const mongoose = require('mongoose');

// Add a new category
exports.addCategory = async (req, res) => {
  try {
    console.log(req.body); // Log the body to check the request
    const { name } = req.body;
    console.log('namefdf: ', name);
    if (!name || name.trim().length === 0) {
      return res.status(400).json({ message: 'Category name is required' });
    }

    const existingCategory = await Category.findOne({ name });
    console.log('existingCategory: ', existingCategory);
    if (existingCategory) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    const category = new Category({ name });
    await category.save();

    res.status(201).json({ message: 'Category added successfully', category });
  } catch (error) {
    console.error('Error adding category:', error);
    res.status(500).json({ message: 'Server error while adding category' });
  }
}
 
 
 ///get all the cateogry
 exports.getAllCategories = async (req, res) => {
  console.log('Fetching all categories');
  try {
    const categories = await Category.find(); 
    console.log('categories: ', categories);
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Server error while fetching categories' });
  }
};

// Delete a category
exports.deleteCategory = async (req, res) => {
  const { categoryId } = req.body;

  if (!categoryId) {
    return res.status(400).json({ message: 'Category ID is required' });
  }

  if (!mongoose.Types.ObjectId.isValid(categoryId)) {
    return res.status(400).json({ message: 'Invalid Category ID' });
  }

  try {
    const category = await Category.findByIdAndDelete(categoryId);

    if (!category) {
      return res.status(404).json({ message: `Category with ID ${categoryId} not found` });
    }

    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).json({ message: 'Server error while deleting category' });
  }
};


// categories ById

// Get a category by ID
// exports.getCategoryById = async (req, res) => {
//   const { categoryId } = req.params;
//   console.log('categoryId: ', categoryId);

//   // Check if categoryId is a valid ObjectId
//   if (!mongoose.Types.ObjectId.isValid(categoryId)) {
//     return res.status(400).json({ message: 'Invalid Category ID' });
//   }

//   try {
//     const category = await Category.findById(categoryId);

//     if (!category) {
//       return res.status(404).json({ message: 'Category not found' });
//     }

//     res.status(200).json(category);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error while fetching category' });
//   }
// };

// Get a category by ID
exports.getCategoryById = async (req, res) => {
  const { categoryId } = req.params;
  console.log('categoryId: ', categoryId);

  // Check if categoryId is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(categoryId)) {
    return res.status(400).json({ message: 'Invalid Category ID' });
  }

  try {
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error('Error fetching category:', error);
    res.status(500).json({ message: 'Server error while fetching category' });
  }
};




// 2. Get quizzes for a specific category
exports.getQuesCategoryById = async (req, res) => {
  const { categoryId } = req.params;
  console.log('categoryId: ', categoryId);

  // Check if categoryId is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(categoryId)) {
    return res.status(400).json({ message: 'Invalid Category ID' });
  }

  try {
    const quizzes = await Quiz.find({ category: categoryId })
  
      .populate('category', 'name')
      .lean();

    if (quizzes.length > 0) {
      res.status(200).json(quizzes); 
    } else {
      res.status(404).json({ message: 'No quizzes found for this category' });
    }
    console.log('quizzessdff: ', quizzes);
  } catch (err) {
    console.error('Error fetching quizzes:', err);
    res.status(500).json({ message: 'Error fetching quizzes for this category' });
  }
};