const express = require("express");
const router = express.Router();

const {
    createClassRoom,
    getClassroom,
    joinClassroom,
    countSubclassroom,
} = require("../controllers/classroom");

router.post("/create", createClassRoom);
router.get("/:id", getClassroom);
router.post("/join", joinClassroom);
router.get("/count/:id", countSubclassroom);

module.exports = router;
