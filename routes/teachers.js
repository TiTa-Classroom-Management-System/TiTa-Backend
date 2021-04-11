const express = require("express");
const router = express.Router();

const { login, getTimeTable, getClassrooms } = require("../controllers/teachers");

router.post("/login", login);
router.get("/timetable/:email", getTimeTable);
router.get("/classrooms/:email", getClassrooms);

module.exports = router;
