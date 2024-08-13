const User = require('../../models/UserSchema');

const resetPassword = async (req, res) => {
  const { email, phone, newPassword } = req.body;

  try {
    const user = await User.findOne({ email, phone });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    user.password = newPassword;
    await user.save();

    return res.status(200).json({ success: true, message: 'Password reset successful' });
  } catch (error) {
    console.error('Failed to reset password', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = { resetPassword };
