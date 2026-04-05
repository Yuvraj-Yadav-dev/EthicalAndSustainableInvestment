const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  userId: String,
  name: String,
  amount: Number,
  esgScore: Number,
  carbon: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Portfolio", portfolioSchema);