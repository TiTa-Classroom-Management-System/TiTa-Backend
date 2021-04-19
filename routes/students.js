const express = require("express");
const router = express.Router();

const { login, getTimeTable, getClassrooms, getQuiz, getAssignment, submitAssignment } = require("../controllers/students");
const { upload } = require("../controllers/cloudinary");

router.post("/login", login);
router.get("/timetable/:email", getTimeTable);
router.get("/classrooms/:email", getClassrooms);
router.get("/quiz/:email", getQuiz);
router.get("/assignment/:email/:id", getAssignment);
router.post("/assignment/upload",upload,submitAssignment)

module.exports = router;
