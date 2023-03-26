const Subscription = require("../models/subscriptionModel");
const Users = require("../models/userModel");
module.exports = {
  smodel: async(req, res) => {
    try{
    const {name, price,} = req.body;
    const x = await Subscription.create({
      name,
      price,
    })
  }
  catch(error){
      console.log(error);
      res.send("notaddd");
    }
  },
  // usersW: async(req, res) => {
  //   const alluser = await Users.find();
  //   const 
  // },

  // userM: async(req, res) => {

  // }
};
