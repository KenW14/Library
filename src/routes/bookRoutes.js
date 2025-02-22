const express = require('express');
const router = express.Router();

const book_controller = require('../controllers/bookController');

router.get("/", book_controller.get_all_books);

module.exports = router;