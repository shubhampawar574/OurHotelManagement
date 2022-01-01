const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    roomname: {
      type: String,
      //   required: true,
    },
    roomid: {
      type: String,
      //   required: true,
    },
    userid: {
      type: String,
      //   required: true,
    },
    username: {
      type: String,
      //   required: true,
    },
    rating: {
      type: Number,
      //   required: true,
    },
    review: {
      type: String,
      //   required: true,
    },
  },
  {
    timestamps: true,
  }
);

const reviewModel = mongoose.model("reviews", reviewSchema);

module.exports = reviewModel;
