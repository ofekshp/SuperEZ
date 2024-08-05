const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/users/userController.js');
const { signInUser } = require('../controllers/users/loginController.js');
const { logout } = require('../controllers/users/logoutController.js');


router.post('/signup', (req, res) => {
  console.log('Received POST request to /signup');
  registerUser(req, res);
});

router.post('/login', (req, res) => {
  console.log('Received POST request to /login');
  signInUser(req, res);
});


router.post('/logout', logout);



module.exports = router;
