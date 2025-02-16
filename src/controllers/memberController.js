// Member Controller 
const memberService = require('../services/memberService');

const getMember = async (req, res) => {
  try {
    const { title, author, page, limit } = req.query;
    const member = await memberService.getMember(title || '', parseInt(page) || 1, parseInt(limit) || 10);
    res.status(200).json({ data: member });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { getMember };
