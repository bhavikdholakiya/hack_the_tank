const Pizza = require("../models/pizzaModel");

module.exports = {
  getPizzas: async (req, res) => {
    try {
      // const { price, search } = req.body;
      const pizzas = await Pizza.find();
      return res.status(200).json(pizzas);
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ msg: err.message });
    }
  },
  addp: async(req, res) => {
    try{
    const {name, description, price, image} = req.body;
    const x = await Pizza.create({
      name,
      price,
      description,
      image
    })
  }
    catch{
      console.log(error);
      res.send("notaddd");
    }
  },

};
