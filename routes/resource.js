const express = require("express");
const router = express.Router();

const { createResource } = require("../controllers/resource");
const { upload } = require("../controllers/cloudinary");

router.post("/create", upload, createResource);

module.exports = router;