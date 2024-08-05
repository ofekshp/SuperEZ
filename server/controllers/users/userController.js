const User = require('../../models/UserSchema');
const validateUser = require('../../validation/util'); // Import your validation function


const registerUser = async (req, res) => {
    const { name, email, password, phone } = req.body;

    console.log('Received data:', { name, email, password, phone });

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        res.status(400).json({ error: 'Email is already registered' });
        return { error: 'Email is already registered' };
    }
    
    try {
      const newUser = new User({ name, email, password, phone });


    const validationResponse = await validateUser(req.body, res);
    if (validationResponse !== true) {
        return;  
    }

      await newUser.save();
      console.log('User saved:', newUser);
      res.status(201).send('User registered successfully');
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).send('Error registering user');
    }
  };
  
  module.exports = { registerUser };