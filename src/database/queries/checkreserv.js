const dbConnection = require('./../db_connection');

const memberInfo = (mobile, cb) => {
  const sql = {
    text: 'SELECT * FROM members WHERE mobile=$1',
    values: [mobile],
  };


  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    return cb(null, res);
  });
};

const bookName = (book, cb) => {
  const sql = {
    text: 'SELECT * FROM books WHERE book_name ilike $1 ',
    values: [`%${book }%`],
  };


  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    return cb(null, res);
  });
};

module.exports = { memberInfo, bookName };

