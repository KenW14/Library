// Borrowing Routes 
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/borrowingController');

// Mendefinisikan endpoint GET /books
router.get('/', borrowingController.getBooks);

module.exports = router;