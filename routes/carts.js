const express = require('express');
const router = express.Router();
const { addToCart, getCartItems, deleteCartItems } = require("../controller/CartItemController");

router.use(express.json());

//장바구니 담기
router.post('/', addToCart)


//장바구니 아이템 목록 조회 //선택한 장바구니 상품 목록 조회
router.get('/', getCartItems) 

//장바구니 도서 삭제
router.delete('/:id', deleteCartItems)

module.exports = router



