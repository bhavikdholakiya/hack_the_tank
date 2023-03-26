const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();

const checkAdmin = async (req, res, next) => {
  try {
    console.log(req)
    let { role } = req.tempUser;
    console.log(role);
    if (role === "admin") {
      res.json("true");
      next();
    }
  }
  catch(err){
    res.send(err);
  }
};

module.exports = checkAdmin;
