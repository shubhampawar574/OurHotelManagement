// api endpoints of rooms
const express = require("express");
const router = express.Router();
const multer = require("multer");

const Room = require("../models/room");

router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await Room.find({});
    // return res.json({ rooms });      //return object-rooms of array
    res.send(rooms);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

router.post("/getroombyid", async (req, res) => {
  const roomid = req.body.roomid;

  try {
    const room = await Room.findOne({ _id: roomid });
    // return res.json({ rooms });      //return object-rooms of array
    res.send(room);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

router.post("/addroom", async (req, res) => {
  try {
    const newroom = new Room(req.body);
    await newroom.save();
    res.send("New room added successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.get("/getallrooms/:id", async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    // return res.json({ rooms });      //return object-rooms of array
    res.send(room);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

router.put("/getallrooms/:id", async (req, res) => {
  try {
    const editRoom = await Room.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!editRoom) {
      return res.status(404).json({ message: "Not found" });
    }
    return res.status(200).send({ success: true, post: editRoom });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

router.delete("/getallrooms/:id", async (req, res) => {
  try {
    await Room.deleteOne({ _id: req.params.id });
    res.status(201).json("Room deleted Successfully");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

module.exports = router;
