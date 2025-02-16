const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Mendefinisikan endpoint GET /books
router.get('/', bookController.getBooks);

module.exports = router;