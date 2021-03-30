const express = require("express");
const db = require("../db/db");
const router = express.Router();

router.post("/login");

router.get("/time_table/:email");

module.exports = router;
