const express = require('express');
const sortController = require("../controllers/sortController");
const router = express.Router();
router.use(express.json())

// 1. Hot 게시글 / 리스트
// GET /sort/hotPost
router.get('/hotPost', sortController.getHotPost);

// 2. 향수 실시간 랭킹 / 리스트
// GET /sort/hotPerfume
router.get('/hotPerfume', sortController.getHotPerfume);

// 3. 향수 최신순 정렬
// GET /sort/latestPerfume
router.get('/latestPerfume', sortController.getLatestPerfume);

// 4. 향수 랭킹순 정렬
// GET /sort/likePerfume
router.get('/likePerfume', sortController.getLikePerfume);

// 5. 향수 향별 정렬
// GET /sort/scentPerfume
router.get('/scentPerfume', sortController.getScentPerfume);

// 6. 게시글 리뷰순 정렬
// GET /sort/reviewPost
router.get('/reviewPost', sortController.getReviewPost);

// 7. 게시글 최신순 정렬
// GET /sort/latestPost
router.get('/latestPost', sortController.getLatestPost);


// 8. 게시글 랭킹순 정렬
// GET /sort/likePost
router.get('/likePost', sortController.getLikePost);


module.exports = router;