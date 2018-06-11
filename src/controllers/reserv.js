const check = require('./../database/queries/checkreserv');
const reserv = require('./../database/queries/reserv');

exports.get = (req, res) => {
  res.render('reserv', { style: { reserv: 'css/reserv.css' } });
};

exports.post = (req, res) => {
  const { mobile } = req.body.data;
  const { book } = req.body.data;


  const response = {};
  check.memberInfo(mobile, (err, data1) => {
    if (err) {
      res.send({ data: 'error in server' });
    } else {
      check.bookName(book, (err2, data2) => {
        if (err2) {
          res.send({ err: 'error in server' });
        } if (!data1.rows[0] && !data2.rows[0]) {
          response.member = 'not found';
          response.book = 'not found';
          res.send(response);
        } else if (!data1.rows[0]) {
          response.member = 'not found';
          res.send(response);
        } else if (!data2.rows[0]) {
          response.book = 'not found';
          res.send(response);
        } else {
          const result = { data1: data1.rows[0], data2: data2.rows[0] };
          res.send(result);
        }
      });
    }
  });

  const { startDate } = req.body.data;
  const { endDate } = req.body.data;
  const { fullName } = req.body.data;


  reserv(book, fullName, startDate, endDate, (err, data3) => {
    if (err) {
      console.log('soory', err);
    } else {
      console.log('done insert');
    }
  });
};
// note ^_^
// i want make autcomplet when write name of book  I think this code not ok must //be send book name by another fetch to make auto complet
// what your opinion ^_^

