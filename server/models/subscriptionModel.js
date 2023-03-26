const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const subsriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },

  // features: [{ type: mongoose.Schema.Types.ObjectId, ref: "Feature" }],
});

module.exports = mongoose.model("Subscription", subsriptionSchema);
