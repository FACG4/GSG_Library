const dbConnection = require('./../db_connection');

const reserv = (bookName, fullName, start, end, cb) => {
  const sql = {
    text: 'INSERT INTO lending(book_id,member_id,start_date,end_date )VALUES((SELECT id from books WHERE book_name=$1),(SELECT id from members WHERE full_name=$2),$3,$4)',
    values: [bookName, fullName, start, end],
  };


  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    return cb(null, res);
  });
};
module.exports = reserv;
