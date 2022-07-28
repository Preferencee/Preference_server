const express = require('express');
const userController = require("../controllers/userController");
const router = express.Router();
router.use(express.json())

 // 1. 회원가입 API
 // POST /users
 // router.post('/signup', userController.postUser);

// 2. 회원가입-이메일 중복 검사
// GET /users/emailCheck
router.get('/emailCheck', userController.getEmailCheck);

// 3. 회원가입-닉네임 중복 검사
// GET /users/nicknameCheck
router.get('/nicknameCheck', userController.getNicknameCheck);

// 4. 필터링 검색
// GET /products/filter
router.get('/products/filter', userController.getFilterSearch);

// 5. 유사 검색
// GET /users/products/similar
router.get('/products/similar', userController.getSimilarSearch);

module.exports = router;