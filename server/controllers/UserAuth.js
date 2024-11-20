const UserSchema = require('../models/UserSchema');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
dotenv.config();
exports.register = async (req, res) => {
  try {
    const { username, password,email} = req.body;
    console.log(req.body);
       // Input validation
       if (!username || !password || !email) {
        return res.status(400).json({ message: 'Username, password, and email are required.' });
      }
  
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserSchema({ username, password: hashedPassword,email });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
    try {
      const {password ,email} = req.body;
      const user = await UserSchema.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password.' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid username or password.' });
      }
            // Store username and password in the session for authentication
                // Store username in the session for authentication
                 // Set session data
    req.session.user = {
      userId: user._id,
      email: user.email,
    };      
  // Save the session explicitly
  req.session.save((err) => {
    if (err) {
      console.error('Session save error:', err);
      return res.status(500).json({ message: 'Login failed.' });
    }
    console.log('Session after login:', req.session);
    res.json({ message: 'Login successful.' });
  });
} catch (error) {
  res.status(500).json({ error: error.message });
}
  };

  // exports.checkSession = (req, res) => {
  //   console.log('Session during check:', req.session);
  //   if (req.session && req.session.user) {
  //     return res.json({ isAuthenticated: true });
  //   }
  //   console.log('Unauthorized session:', req.session);
  //   res.json({ isAuthenticated: false });
  // };
  

  exports.checkSession =(req, res) => {
    console.log('Session on check:', req.session);
    if (req.session.user) {
      res.json({ isAuthenticated: true });
    } else {
      res.json({ isAuthenticated: false });
      console.log("UnAuth",req.session)
      console.log("UnAuthorized person",req.session.username)
    }
  };

  // Change Passowrd 

  exports.changePassword = async (req,res)=>{
    try {
    
    const {currentPassword,newPassword,confirmPassword}=req.body;
    const { username } = req.session;
    if (!username) {
      return res.status(401).json({ message: 'Unauthorized. Please log in.' });
    }
      // Retrieve the user from the database
      const user = await UserSchema.findOne({username});
      if(!user){
        return res.status(404).json({ message: 'User not found.' });
      }
       // Verify current password
       const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password); 
       if(!isCurrentPasswordValid){
        return res.status(400).json({ message: 'Current password is incorrect.' });
       }
        // Check if new password and confirm password match
        if(newPassword !== confirmPassword){
          return res.status(400).json({ message: 'New password and confirm password do not match.' });
        }
        // Validate new password strength
        const passwordStrengthRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&])[A-Za-z\d!@#$%^&]{8,}$/;
        if (!passwordStrengthRegex.test(newPassword)) {
            return res.status(400).json({
                message: 'New password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.'
            });
        }
           // Hash the new password and update it in the database
           user.password = await bcrypt.hash(newPassword, 10);
           await user.save();
       
           res.json({ message: 'Password changed successfully.' });
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
  }

  // // Logout
  exports.logout = async (req, res) => {
    try {
      if (!req.session) {
        return res.status(401).json({ message: 'No session found. Already logged out or not logged in.' });
       
      }
      req.session.destroy((err) => {
        if (err) {
          return res.status(500).json({ message: 'Logout failed.' });
        }
        res.clearCookie('connect.sid'); // Clear the session cookie
        res.json({ message: 'Logged out successfully' });
      });
    } catch (error) {
      res.status(500).json({ message: 'Error during logout' });
    }
  };