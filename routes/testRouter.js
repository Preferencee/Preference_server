const express = require('express');
const testController = require("../controllers/testController");
const router = express.Router();
router.use(express.json())

// 1. 취향 테스트
// GET /test/preference
router.get('/preference', testController.getPreference);

module.exports = router;