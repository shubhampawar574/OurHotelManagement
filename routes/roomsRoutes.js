// api endpoints of rooms
const express = require("express");
const router = express.Router();
const multer = require("multer");

const Room = require("../models/room");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./client/public/uploads1/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

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

router.post("/addroom", upload.single("roomImage"), async (req, res) => {
  try {
    const newroom = new Room({ ...req.body, roomImage: req.file.originalname });
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

router.put("/getallrooms/:id", upload.single("roomImage"), async (req, res) => {
  // try {
  //   const editRoom = await Room.findOneAndUpdate(
  //     { _id: req.params.id },
  //     req.body,
  //     { new: true }
  //   );
  //   if (!editRoom) {
  //     return res.status(404).json({ message: "Not found" });
  //   }
  //   return res.status(200).send({ success: true, post: editRoom });
  // } catch (err) {
  //   return res.status(404).json({ message: err });
  // }
  Room.findById(req.params.id)
    .then((room) => {
      room.name = req.body.name;
      room.rentperday = req.body.rentperday;
      room.maxcount = req.body.maxcount;
      room.phonenumber = req.body.phonenumber;
      room.description = req.body.description;
      room.type = req.body.type;

      room.roomImage = req.file.originalname;

      room
        .save()
        .then(() => res.json("room edited"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
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
