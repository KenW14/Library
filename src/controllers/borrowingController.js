// Borrowing Controller 
const borrowingService = require('../services/borrowingService');

const getBorrowing = async (req, res) => {
  try {
    const { title, author, page, limit } = req.query;
    const borrowing = await borrowingService.getBorrowing(title || '', parseInt(page) || 1, parseInt(limit) || 10);
    res.status(200).json({ data: borrowing });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { getBorrowing };