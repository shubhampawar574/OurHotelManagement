const express = require("express");
const router = express.Router();

const Review = require("../models/review");

router.get("/getallreviews", async (req, res) => {
  try {
    const reviews = await Review.find({});
    // return res.json({ rooms });      //return object-rooms of array
    res.send(reviews);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

module.exports = router;
