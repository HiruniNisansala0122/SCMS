
const express = require("express");
const { getMe } = require("./users.controller");
const { authenticateToken } = require("../../middleware/auth.middleware");

const router = express.Router();

router.get("/me", authenticateToken, getMe);

module.exports = router;
