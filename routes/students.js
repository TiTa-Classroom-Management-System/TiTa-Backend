const express = require("express");
const router = express.Router();

const { login, getTimeTable, getClassrooms, getQuiz, getAllQuizzes ,getAssignment, getAllAssignments ,submitAssignment, getResource } = require("../controllers/students");
const { upload } = require("../controllers/cloudinary");

router.post("/login", login);
router.get("/timetable/:email", getTimeTable);
router.get("/classrooms/:email", getClassrooms);
router.get("/quiz/:email/:id", getQuiz);
router.get("/quizzes/:email", getAllQuizzes);
router.get("/assignment/:email/:id", getAssignment);
router.get("/assignments/:email", getAllAssignments);
router.post("/assignment/upload",upload,submitAssignment)
router.get("/resource/:email/:id", getResource);

module.exports = router;
