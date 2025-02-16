const bookService = require('../services/bookService');

const getBooks = async (req, res) => {
  try {
    const { title, author, page, limit } = req.query;
    const books = await bookService.getBooks(title || '', parseInt(page) || 1, parseInt(limit) || 10);
    res.status(200).json({ data: books });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { getBooks };