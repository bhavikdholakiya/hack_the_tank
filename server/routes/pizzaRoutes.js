const express = require("express");
const pizzaController = require("../controllers/pizzaController");
const router = express.Router();

router.post("/getAll", pizzaController.getPizzas);
router.post("/addp", pizzaController.addp);


module.exports = router;
