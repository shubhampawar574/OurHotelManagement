const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
  {
    ename: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    employeetype: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    imageurl1: {
      // data: Buffer,
      // contentType: String,
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const employeeModel = mongoose.model("employees", employeeSchema); //hotel - collection name

module.exports = employeeModel;
