const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    maxcount: {
      type: Number,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    rentperday: {
      type: Number,
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
    roomImage: {
      type: String,
      required: true,
    },
    currentbookings: [],
  },
  {
    timestamps: true,
  }
);

const roomModel = mongoose.model("hotels", roomSchema); //hotel - collection name

module.exports = roomModel;
