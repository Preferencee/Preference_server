const express = require('express');
const likeController = require("../controllers/likeController");
const router = express.Router();
router.use(express.json())

// 1. 게시글 좋아요
// POST /like/
router.post('/post', likeController.postPostLike);

// 2. 향수 상품 좋아요
// POST /like/
router.post('/product', likeController.postProductLike);

// 3. 게시글 좋아요 삭제
// POST /like/
router.post('/postDel', likeController.postPostLikeDel);

// 4. 향수 상품 좋아요 삭제
// POST /like/
router.post('/productDel', likeController.postProductLikeDel);
module.exports = router;