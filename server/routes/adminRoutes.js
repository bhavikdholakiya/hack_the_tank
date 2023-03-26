const express = require("express");
const router = express.Router();
const passport = require("passport");
const { generateRefreshToken } = require("../middlewares/generateTokens");
const checkAuth = require("../middlewares/checkAuth");
const checkAdmin = require("../middlewares/isAdmin");
const adminController = require("../controllers/adminController");
const e = require("express");

router.get("/", checkAuth, checkAdmin);
router.post("/", checkAuth, checkAdmin);

module.exports = router;
