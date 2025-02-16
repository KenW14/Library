// Member Routes 
// Borrowing Routes 
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/memberController');

// Mendefinisikan endpoint GET /books
router.get('/', memberController.getBooks);

module.exports = router;