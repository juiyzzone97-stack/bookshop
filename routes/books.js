const express = require('express');
const router = express.Router();
const {
  allBooks,
  bookDetail
} = require('../controller/BookController');



router.use(express.json());
//도서전체조회
router.get('/', allBooks);
//도서개별조회
router.get('/:id', bookDetail);



module.exports = router