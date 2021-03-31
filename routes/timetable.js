const express = require("express");
const router = express.Router();
const { createTimetable } = require("../controllers/timetable");

router.post("/create", createTimetable);

module.exports = router;
