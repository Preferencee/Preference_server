const express = require('express');
const userController = require("../controllers/userController");
const router = express.Router();
router.use(express.json())

// 1. 회원가입-이메일 중복 검사
// GET /users/emailCheck
router.get('/emailCheck', userController.getEmailCheck);

// 2. 회원가입-닉네임 중복 검사
// GET /users/nicknameCheck
router.get('/nicknameCheck', userController.getNicknameCheck);

// 3. 비밀번호 찾기 
// GET /users/findPassword
router.get('/findPassword', userController.getFindPassword);

// 4. 회원가입
// POST /users/
router.post('/', userController.postJoin);

// 5. 로그인
// POST /users/login
router.post('/login', userController.postLogin);


module.exports = router;