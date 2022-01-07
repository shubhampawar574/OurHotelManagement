const mongoose = require("mongoose");

const mealSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    mealImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const mealModel = mongoose.model("meals", mealSchema); //hotel - collection name

module.exports = mealModel;
