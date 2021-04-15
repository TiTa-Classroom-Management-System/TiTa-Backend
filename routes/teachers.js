const express = require("express");
const router = express.Router();

const { login, getTimeTable, getClassrooms, getQuiz } = require("../controllers/teachers");

router.post("/login", login);
router.get("/timetable/:email", getTimeTable);
router.get("/classrooms/:email", getClassrooms);
router.get("/quiz/:email", getQuiz);

module.exports = router;
