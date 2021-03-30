const express = require("express");
const router = express.Router();

const { login, getTimeTable } = require("../controllers/students");

router.post("/login", login);
router.get("/time_table/:email", getTimeTable);

module.exports = router;
