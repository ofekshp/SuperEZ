const bcrypt = require('bcrypt');
const UserSchema = require('../models/UserSchema');



const validateUser = async (user, res) => {
    const { email, password } = user;

    if (!email || !password) {
        res.status(400).json({ message: 'All fields are required' });
        return { error: 'All fields are required' };
    }

    // Check if the email exists in the database
    const existingUser = await UserSchema.findOne({ email });
    if (!existingUser) {
        res.status(400).json({ message: 'Email doesn\'t exist' });
        return { error: 'Email doesn\'t exist' };
    }

    // Return true if the email exists and fields are valid
    return true;
};

module.exports = { validateUser };
