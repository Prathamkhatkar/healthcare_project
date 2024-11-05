const express = require("express");
const router = express.Router();
const { registerDoctor } = require("../controller/doctorsDetailController"); // Ensure the path is correct

// Route to register a doctor
router.post("/register", registerDoctor);

module.exports = router;