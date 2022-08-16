const express = require('express');
const postController = require("../controllers/postController");
const router = express.Router();
router.use(express.json())

// 1. 게시글 작성
// POST /post/
router.post('/', postController.postPostUpload);

module.exports = router;