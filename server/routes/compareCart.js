const express = require('express');
const router = express.Router();
const CompareCartController = require('../controllers/compareCartController'); 

router.post('/', CompareCartController.compareCart);

module.exports = router;
