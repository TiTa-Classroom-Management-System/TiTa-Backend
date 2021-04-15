const express = require("express");
const router = express.Router();

const { login, getTimeTable, getClassrooms, getQuiz ,getAssignment} = require("../controllers/teachers");

router.post("/login", login);
router.get("/timetable/:email", getTimeTable);
router.get("/classrooms/:email", getClassrooms);
router.get("/quiz/:email", getQuiz);
router.get("/quiz/:email", getAssignment);

module.exports = router;
