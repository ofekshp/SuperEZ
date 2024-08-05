const bcrypt = require('bcrypt');
const UserSchema = require('../models/UserSchema');

const validateUser = async (user, res) => {
    const { name, email, password, phone } = user;

    // Validate user object
    if (!name || !email || !password || !phone) {
        res.status(400).json({ message: 'All fields are required' });
        return { message: 'All fields are required' };
    }

    if (phone.length !== 10) {
        res.status(400).json({ message: 'Phone number is incorrect' });
        return { message: 'Phone number is incorrect' };
    }

    // Check if user with the same email already exists
    const existingUser = await UserSchema.findOne({ email });
    if (existingUser) {
        res.status(400).json({ error: 'Email is already registered' });
        return { error: 'Email is already registered' };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        res.status(400).json({ message: 'Invalid email format' });
        return { message: 'Invalid email format' };
    }

    if (password.length < 6) {
        res.status(400).json({ message: 'Password is too short' });
        return { message: 'Password is too short' };
    }

    return true;
};

module.exports = validateUser;
