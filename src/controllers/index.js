const express = require('express');
const router = express.Router();
const dashboard = require('./dashboard');
<<<<<<< HEAD
const GSG_Library = require('./GSG_Library');
=======
const checkuser = require('./checkUser');
const login = require('./login');
const lendBook = require('./lendBook');
const GSG_Library = require('./GSG_Library');

router.get('/dashboard', dashboard.get );

router.get('/GSG_Library', GSG_Library.get);

router.get('/login', login.get);
router.post('/login', login.post);

router.get('/lendbook', lendBook.get);
router.post('/lendbook', lendBook.post);
>>>>>>> 6cd93514f953f5becfc3db5e11d60e63db86717a

// router.get('/', (req, res)=>{
// });

<<<<<<< HEAD
router.get('/dashboard', dashboard.get);
router.get('/GSG_Library', GSG_Library.get);
router.post('/GSG_Library', GSG_Library.post);

=======
>>>>>>> 6cd93514f953f5becfc3db5e11d60e63db86717a
module.exports = router;
