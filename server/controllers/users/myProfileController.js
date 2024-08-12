
const User= require('../../models/UserSchema');
const bcrypt = require('bcrypt');

exports.getUserProfile = async (req, res) => {
  try {
    const { email } = req.headers; 
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      user: {
        name: user.name,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.updateUserProfile = async (req, res) => {
  try {
    const { name, phone, password } = req.body;
    const userEmail = req.headers.email;

    if (!name || !phone) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    if (password && password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    if (phone.length < 10) {
      return res.status(400).json({ message: 'Phone number must be at least 10 digits' });
    }

    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    
    user.name = name;
    user.phone = phone;
    if (password) {
      user.password = password; 
    }
    await user.save();

    return res.status(200).json({ user });
  } catch (error) {
    console.error('Error updating user profile:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

