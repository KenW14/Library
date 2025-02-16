const bookModel = require('../models/book');

const getBooks = async (filter, page, limit) => {
  return await bookModel.getBooks(filter, page, limit);
};

module.exports = { getBooks };