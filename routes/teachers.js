const express = require("express");
const router = express.Router();

const { login, getTimeTable } = require("../controllers/teachers");

router.post("/login", login);
router.get("/timetable/:email", getTimeTable);

module.exports = router;
