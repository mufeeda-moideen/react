const express = require("express");
const router = express.Router();

const registrationController = require("../controllers/registrationController");

// POST /data → will handle user registration
router.post("/data", registrationController.register);

module.exports = router;
