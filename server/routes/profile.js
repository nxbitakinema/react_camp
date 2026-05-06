const express = require("express");
const router = express.Router();

// controllers
const { createProfile } = require("../controllers/profile");

router.post("/profile", createProfile);

module.exports = router;
