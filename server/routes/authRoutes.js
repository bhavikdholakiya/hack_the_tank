const express = require("express");
const router = express.Router();
const passport = require("passport");
const { generateRefreshToken } = require("../middlewares/generateTokens");
const checkAuth = require("../middlewares/checkAuth");
const authController = require("../controllers/authController");
const e = require("express");

router.post("/auth/register", authController.localRegister);

router.post("/user/subscriptionplan", authController.addplan)

router.post("/auth/login", authController.localLogin);

router.post("/auth/refreshToken", authController.refreshToken);

router.post("/user/:id/update", authController.updateUser);

router.get("/user/:id/orders", authController.getUserOrders);

router.get("/user/:id/addresses", authController.getUserAddresses);
router.get("/user/userfind", checkAuth, authController.userfind);

router.post("/auth/logout", authController.logout);

module.exports = router;
