const express = require("express");
const router = express.Router();

const { createQuiz, getQuizResult } = require("../controllers/quiz");

router.post("/create", createQuiz);
router.get("/result/:quiz_id", getQuizResult);

module.exports = router;