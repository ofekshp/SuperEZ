const bcrypt = require('bcrypt');
const UserSchema = require('../models/UserSchema');

// Define the possible return type of validateUser
// ValidationError and ValidationResult types are removed in JS

const validateUser = (user, res) => {
    const { name, email, password, phone } = user;

    // Validate phone number
    if (phone && phone.length !== 10) {
        res.status(400).json({ message: 'Phone number is incorrect' });
        return { message: 'Phone number is incorrect' };
    }

    // Validate email format
    if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            res.status(400).json({ message: 'Invalid email format' });
            return { message: 'Invalid email format' };
        }
    }

    // Validate password
    if (password) { 
        if (password.length < 6) {
            res.status(400).json({ message: 'Password is too short' });
            return { message: 'Password is too short' };
        }
    }

    return true;
};

module.exports = validateUser;
