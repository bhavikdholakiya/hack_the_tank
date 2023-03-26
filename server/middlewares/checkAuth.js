const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();

const checkAuth = async (req, res, next) => {
  try {
    let { refreshToken } = req.cookies;
    if (!refreshToken) {
      return next();
    }
    const payload = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET_KEY
    );
    const user = await User.findOne(
      {
        $or: [
          { email: payload.email },
        ],
      },
      { __v: 0, password: 0 }
    );
    // console.log(user);
    if (!user) {
      return next();
    }
    req.tempUser = user;
    console.log("Dev"+req.tempUser);
    next(req.tempUser._id);
  } catch (err) {
    console.log(`Error from checkAuth.js: ${err.message}`);
    return next();
  }
};

module.exports = checkAuth;
