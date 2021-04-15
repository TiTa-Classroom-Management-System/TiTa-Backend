const express = require("express");
const router = express.Router();

const { createAssignment } = require("../controllers/assignment");

router.post("/create", createAssignment);

module.exports = router;