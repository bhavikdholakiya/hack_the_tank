const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      default: null,
    },
    lastName: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
      partialFilterExpression: { email: { $type: "string" } },
    },
    username: {
      type: String,
      unique: true,
      sparse: true,
      partialFilterExpression: { username: { $type: "string" } },
    },
    password: {
      type: String,
    },
    avatar: {
      type: {
        public_id: {
          type: String,
          default: null,
        },
        url: {
          type: String,
          default: null,
        },
      },
      default: null,
    },
    primaryAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      default: null,
    },
    loginType: {
      type: String,
      enum: ["local", "google", "facebook"],
      // required: true,
    },
    role: {
        type: String,
        default: "user",
    },
    providers: {
      type: [String],
      required: true,
      default: [],
    },
    subscriptionplan:{
      type: String,
      default: "free",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
