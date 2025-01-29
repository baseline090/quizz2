
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const Category = require('../models/Category');
const tokenBlacklist = require('../utils/tokenBlacklist');
const User = require('../models/User');

// Register Admin
exports.registerAdmin = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    console.log('\nPassword do not match with the confirm password');
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email, role: 'admin' });
    if (existingAdmin) {
      console.log('\nAdmin with this email already exists', email);
      return res.status(400).json({ message: 'Admin with this email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin
    const newAdmin = new Admin({
      email,
      password: hashedPassword,
      role: 'admin',
    });

    await newAdmin.save();
    console.log('\nAdmin registered successfully:', newAdmin);
    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};




// exports.loginAdmin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const admin = await Admin.findOne({ email, role: 'admin' });
//     if (!admin) {
//       console.log('\nNo admin register with this email');
//       return res.status(400).json({ message: 'No admin register with this email' });
//     }

//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) {
//       console.log('\nInvalid email or password');
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Generate JWT with role info
//     const token = jwt.sign(
//       { id: admin._id, email: admin.email, role: admin.role },
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' },
//     );

//     res.status(200).json({ message: 'Login successful', token });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };





exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email, role: 'admin' });
    if (!admin) {
      console.log('\nNo admin register with this email');
      return res.status(400).json({ message: 'No admin register with this email' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      console.log('\nInvalid email or password');
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Create JWT payload with additional details
    const payload = {
      adminId: admin._id,
      email: admin.email,
      role: admin.role,
    };

    // Sign the token with a 24-hour expiration
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });

    //console for sucessful login

    console.log('\nLogin successful', {
      token,
      data: {
        adminId: admin._id,
        email: admin.email,
        role: admin.role,
      },
    });


    return res.status(200).json({
      message: 'Login successful!',
      token,
      data: {
        adminId: admin._id,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error });
  }
};






 // Get all users  for Admin onaly
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    console.log(users)
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching users' });
  }
};


// Delete a user
exports.deleteUser = async (req, res) => {
  const { userId } = req.body; // Extract userId from the body

  if (!userId) {
    console.log('\nUser ID is required');
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    console.log(deletedUser, "deleted user")
    if (!deletedUser) {
      console.log('\nUser not found');
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error while deleting user' });
  }
};


// Admin Logout
exports.adminLogout = (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    console.log('Token not provided');
    return res.status(400).json({ message: 'Token not provided' });
  }

  tokenBlacklist.addToken(token);
  console.log('\nBlocklisted Tocken',token);
  console.log('\nAdmin successfully logged out');
  res.status(200).json({ message: 'Admin successfully logged out' });
};




