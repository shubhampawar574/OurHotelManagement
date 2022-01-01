// api endpoints of users/admin
const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.post("/register", async (req, res) => {
  //   const newUser = new User(req.body);   this is dame as below line
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const user = await newUser.save();

    res.send("User registered Successfully.");
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email, password: password });
    if (user) {
      const temp = {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        _id: user._id,
      };
      //   res.send("User login successful");
      res.send(temp);
    } else {
      return res.status(400).json({ message: "Login failed.. " });
    }
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
