
const UserSchema = require('../../models/UserSchema');

exports.logout = async (req, res) => {
  try {
    // Clear cookies related to authentication
    res.clearCookie('isLoggedIn', { path: '/' });


    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};