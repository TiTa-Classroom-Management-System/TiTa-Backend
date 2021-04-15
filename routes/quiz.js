const express = require("express");
const router = express.Router();

const { createQuiz } = require("../controllers/quiz");

router.post("/create", createQuiz);

module.exports = router;