const express = require('express');
const router = express.Router();

router.use(express.json());

//도서전체조회
router.get('/', (req, res) => {
   res.json('도서전체조회');
});

//도서개별조회
router.get('/:id', (req, res) => {
  res.json('도서개별조회');
});

//카테고리별 도서 목록 조회
router.get('/', (req, res) => {
  res.json('카테고리별 도서 목록 조회');
});

module.exports = router