const express = require("express");
const router = express.Router();

const { createClassRoom,getClassroom,joinClassroom} = require("../controllers/classroom");

router.post("/create", createClassRoom);
router.get("/:id",getClassroom);
router.post("/join", joinClassroom);

module.exports = router;
