const express = require("express");
const router = express.Router();
const db = require("../db/db");
const { createClassRoom } = require("../controllers/classroom");

router.post("/create", createClassRoom);

module.exports = router;
