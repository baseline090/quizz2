
//-----------Latest code 19-12-2024 ----------------///
const jwt = require('jsonwebtoken');
const tokenBlacklist = require('../utils/tokenBlacklist');

const auth = (roles = []) => (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized access. Please login first.' });
  }

  if (tokenBlacklist.isTokenBlacklisted(token)) {
    return res.status(401).json({ message: 'Token is invalid. Please login again.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request

    // Check if user role is authorized
    if (roles.length && !roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized access. Please login again.' });
  }
};

module.exports = auth;



// // middleware/auth.js
// const jwt = require('jsonwebtoken');

// const authenticateJWT = (req, res, next) => {
//   const token = req.header('Authorization')?.replace('Bearer ', ''); // Get token from headers

//   if (!token) {
//     return res.status(403).json({ error: 'No token provided' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
//     req.user = decoded; // Attach the decoded JWT (contains user info) to the request
//     next(); // Proceed to the next middleware/controller
//   } catch (err) {
//     return res.status(403).json({ error: 'Invalid token' });
//   }
// };

// module.exports = authenticateJWT;
