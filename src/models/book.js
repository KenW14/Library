const pool = require('../config/database');

const getBooks = async (filter = '', page = 1, limit = 10) => {
  const offset = (page - 1) * limit;
  const query = `
    SELECT * FROM books WHERE LOWER(title) LIKE $1 OR LOWER(author) LIKE $1
    LIMIT $2 OFFSET $3
  `;
  const res = await pool.query(query, [`%${filter.toLowerCase()}%`, limit, offset]);
  return res.rows;
};