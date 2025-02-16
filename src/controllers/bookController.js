const db = require("../config/database");

exports.get_all_books = async function(req, res) {
    // call service here
    const user = await db.any("SELECT * FROM User");
    res.json(user);
    // res.send('NOT IMPLEMENTED: books list');
};