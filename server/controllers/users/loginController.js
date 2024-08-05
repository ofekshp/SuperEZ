const bcrypt = require('bcrypt');
const User = require('../../models/UserSchema'); 
const { validateUser } = require('../../validation/loginUtils');


const signInUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email, password });
      const validationResponse = await validateUser(req.body, res);
      if (validationResponse !== true) {
          return; 
      }
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).send('Error logging in user');
    }
  };
  
  module.exports = { signInUser };