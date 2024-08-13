const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/users/userController.js');
const { signInUser } = require('../controllers/users/loginController.js');
const { logout } = require('../controllers/users/logoutController.js');
const { resetPassword } = require('../controllers/users/forgotPasswordController.js');
const { getUserProfile, updateUserProfile } = require('../controllers/users/myProfileController.js');

// Route for user registration
router.post('/signup', (req, res) => {
  console.log('Received POST request to /signup');
  registerUser(req, res);
});

// Route for user login
router.post('/login', (req, res) => {
  console.log('Received POST request to /login');
  signInUser(req, res);
});

// Route for user logout
router.post('/logout', (req, res) => {
  console.log('Received POST request to /logout');
  logout(req, res);
});

// Route for password reset
router.post('/reset-password', (req, res) => {
  console.log('Received POST request to /reset-password');
  resetPassword(req, res);
});

// Route for fetching user profile
router.get('/profile', (req, res) => {
  console.log('Received GET request to /profile');
  getUserProfile(req, res);
});

// Route for updating user profile
router.put('/profile', (req, res) => {
  console.log('Received PUT request to /profile');
  updateUserProfile(req, res);
});

module.exports = router;
