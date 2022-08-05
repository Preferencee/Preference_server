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

module.exports = router;