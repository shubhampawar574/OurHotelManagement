const express = require("express");
const router = express.Router();
const multer = require("multer");

const Meal = require("../models/meal");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./client/public/uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Admin panel add employee
router.post("/addmeal", upload.single("mealImage"), async (req, res) => {
  try {
    const newmeal = new Meal({ ...req.body, mealImage: req.file.originalname });
    await newmeal.save();
    res.send("New meal added successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.get("/getallmeals", async (req, res) => {
  try {
    const meals = await Meal.find({});
    // return res.json({ rooms });      //return object-rooms of array
    res.send(meals);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

router.get("/getallmeals/:id", async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);
    // return res.json({ rooms });      //return object-rooms of array
    res.send(meal);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

router.put("/getallmeals/:id", upload.single("mealImage"), async (req, res) => {
  // try {
  //   const editMeal = await Meal.findOneAndUpdate(
  //     { _id: req.params.id },
  //     req.body,
  //     { mealImage: req.file.originalname },
  //     { new: true }
  //   );

  //   if (!editMeal) {
  //     return res.status(404).json({ message: "Not found" });
  //   }
  //   return res.status(200).send({ success: true, post: editMeal });
  // } catch (err) {
  //   return res.status(404).json({ message: err });
  // }
  Meal.findById(req.params.id)
    .then((meal) => {
      meal.name = req.body.name;
      meal.description = req.body.description;
      meal.type = req.body.type;
      meal.cost = req.body.cost;
      meal.mealImage = req.file.originalname;

      meal
        .save()
        .then(() => res.json("meal edited"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.delete("/getallmeals/:id", async (req, res) => {
  try {
    await Meal.deleteOne({ _id: req.params.id });
    res.status(201).json("Meal deleted Successfully");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

module.exports = router;
