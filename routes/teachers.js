const express = require("express");
const router = express.Router();

const { login, getTimeTable, getClassrooms, getQuiz, uploadQuizResult ,getAssignment,getSolvedAssignment, getResource, getList} = require("../controllers/teachers");

router.post("/login", login);
router.get("/timetable/:email", getTimeTable);
router.get("/classrooms/:email", getClassrooms);
router.get("/quiz/:classid", getQuiz);
router.get("/assignment/:classid", getAssignment);
router.get("/assignment/solved/:assignment_id",getSolvedAssignment)
router.get("/resource/:classid", getResource);
router.post("/quiz/result/:quizid", uploadQuizResult);
router.get("/list/:classid", getList)
module.exports = router;
