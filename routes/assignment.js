const express = require("express");
const router = express.Router();

const { createAssignment } = require("../controllers/assignment");
const { upload } = require("../controllers/cloudinary");

router.post("/create", upload,createAssignment);

module.exports = router;