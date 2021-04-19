const express = require("express");
const router = express.Router();

const { login, getTimeTable, getClassrooms, getQuiz, getAssignment } = require("../controllers/students");

router.post("/login", login);
router.get("/timetable/:email", getTimeTable);
router.get("/classrooms/:email", getClassrooms);
router.get("/quiz/:email", getQuiz);
router.get("/assignment/:email", getAssignment);
//router.post("/assignment/",submitAssignment)

module.exports = router;
