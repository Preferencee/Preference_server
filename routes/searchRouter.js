const express = require('express');
const searchController = require("../controllers/searchController");
const router = express.Router();
router.use(express.json())

// 1. 검색-필터링 검색
// GET /search/products/filter
router.get('/products/filter', searchController.getFilterSearch);

// 2. 검색-유사 검색
// GET /search/products/similar
router.get('/products/similar', searchController.getSimilarSearch);

// 3. 해시태그 검색-인스타ver
// GET /search/products/hashtag
router.get('/products/hashtag', searchController.getHashtagSearch);

module.exports = router;