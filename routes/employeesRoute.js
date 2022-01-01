const express = require("express");
const router = express.Router();
const multer = require("multer");

const Employee = require("../models/employee");

// Admin panel add employee
router.post("/addemployee", async (req, res) => {
  try {
    const newemployee = new Employee(req.body);
    await newemployee.save();
    res.send("New employee added successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.get("/getallemployees", async (req, res) => {
  try {
    const employees = await Employee.find({});
    // return res.json({ rooms });      //return object-rooms of array
    res.send(employees);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

router.get("/getallemployees/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    // return res.json({ rooms });      //return object-rooms of array
    res.send(employee);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

router.put("/getallemployees/:id", async (req, res) => {
  try {
    const editEmployee = await Employee.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!editEmployee) {
      return res.status(404).json({ message: "Not found" });
    }
    return res.status(200).send({ success: true, post: editEmployee });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

router.delete("/getallemployees/:id", async (req, res) => {
  try {
    await Employee.deleteOne({ _id: req.params.id });
    res.status(201).json("Employee deleted Successfully");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

module.exports = router;
