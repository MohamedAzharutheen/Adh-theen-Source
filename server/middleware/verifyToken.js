const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    console.log("Received Token:",token)
    if (!token) {
      console.log('Token not provided.');
      return res.status(401).json({ message: 'Token not provided.' });
    }
    try {
      const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
      req.user = decoded;
      console.log('Token is valid. User:', decoded);  // Log the decoded user
    //   res.status(200).json({ message: "Token Is Valid" });
      next();
    } catch (error) {
      
      return res.status(403).json({ message: 'Invalid token.' });
    }
  };
  

module.exports = verifyToken;