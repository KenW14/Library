const pgp = require('pg-promise')();

const db = pgp({
  user: 'dennisanggara',
  host: 'localhost',
  database: 'postgres',
  password: '',
  port: 5432,
});

db.connect().then((obj) => {
    console.log("Connected to database");
    obj.done();
}).catch((error) => {
    console.log("Error connecting to database");
    console.log(error);
}
);

module.exports = db;