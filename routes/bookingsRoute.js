// api endpoints of bookings
const express = require("express");
const router = express.Router();
const moment = require("moment");
const stripe = require("stripe")(process.env.STRIPE_API_KEY);
const { v4: uuidv4 } = require("uuid");

const Booking = require("../models/booking");
const Room = require("../models/room");
const Review = require("../models/review");

router.post("/bookroom", async (req, res) => {
  const {
    room,
    userid,
    username,
    fromdate,
    todate,
    totalamount,
    totaldays,
    token,
  } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: totalamount / 100,
        customer: customer.id,
        currency: "INR",
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      // try {
      const newbooking = new Booking({
        room: room.name,
        roomid: room._id,
        userid,
        username,
        fromdate: moment(fromdate).format("DD-MM-YYYY"),
        todate: moment(todate).format("DD-MM-YYYY"),
        totalamount,
        totaldays,
        transactionId: "1234",
      });

      const booking = await newbooking.save();

      const roomtemp = await Room.findOne({ _id: room._id });
      roomtemp.currentbookings.push({
        bookingid: booking._id,
        fromdate: moment(fromdate).format("DD-MM-YYYY"),
        todate: moment(todate).format("DD-MM-YYYY"),
        userid: userid,
        username: username,
        status: booking.status,
      });
      await roomtemp.save();

      // res.send("Room booked successfully");
      // } catch (error) {
      //   res.status(400).json({ error });
      // }
    }

    res.send("Payment successful, your room is booked");
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.get("/getallbookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.send(bookings);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/cancelbooking", async (req, res) => {
  const { bookingid, roomid } = req.body;
  try {
    const bookingitem = await Booking.findOne({ _id: bookingid });
    bookingitem.status = "cancelled";
    await bookingitem.save();
    const room = await Room.findOne({ _id: roomid });
    const bookings = room.currentbookings;
    const temp = bookings.filter(
      (booking) => booking.bookingid.toString() !== bookingid
    );
    room.currentbookings = temp;
    await room.save();

    res.send("Your booking cancelled successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/getbookingsbyuserid/addreview", async (req, res) => {
  const { bookingid, roomid, rating, review } = req.body;
  try {
    const bookingitem = await Booking.findOne({ _id: bookingid });
    // bookingitem.status = "cancelled";
    // await bookingitem.save();
    const room = await Room.findOne({ _id: roomid });
    // const bookings = room.currentbookings;
    // const temp = bookings.filter(
    //   (booking) => booking.bookingid.toString() !== bookingid
    // );
    // room.currentbookings = temp;
    // await room.save();
    const username = bookingitem.username;
    const userid = bookingitem.userid;
    const roomname = room.name;
    const newreview = new Review({
      roomid,
      rating,
      review,
      username,
      userid,
      roomname,
    });
    await newreview.save();
    res.send("New review added successfully");

    // res.send("Your booking cancelled successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/getbookingsbyuserid", async (req, res) => {
  const userid = req.body.userid;
  try {
    const bookings = await Booking.find({ userid: userid });
    res.send(bookings);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
