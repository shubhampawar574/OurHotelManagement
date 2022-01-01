import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import axios from "axios";
//import Loader and Error from Bookingscreen.js
import Swal from "sweetalert2";
import { Tag, Divider } from "antd";
const { TabPane } = Tabs;

function Profilescreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div className="mt-3 ml-3 mr-3 bs profile-box">
      <h1 className="text-center" style={{ fontSize: "30px" }}>
        <b>User Profile Panel</b>
      </h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Profile" key="1">
          <div class=" card text-center" style={{ width: "18rem" }}>
            <img
              src="data:image/jpeg;base64,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"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                <b>Name</b>: {user.name}
              </h5>
              <h5 class="card-title">
                <b>Email:</b> {user.email}
              </h5>
              <h5 class="card-title">
                <b>Is Admin?</b>: {user.isAdmin ? "Yes" : "No"}
              </h5>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Bookings" key="2">
          <MyBookings />
        </TabPane>
      </Tabs>
    </div>
    // Add route in App.js
  );
}

export default Profilescreen;

// Bookings list component
export function MyBookings() {
  const [bookings, setbookings] = useState([]);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    async function fetchdata() {
      try {
        setloading(true);
        const data = await (
          await axios.post("api/bookings/getbookingsbyuserid", {
            userid: user._id,
          })
        ).data;
        console.log(data);
        setbookings(data);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(error);
      }
    }
    fetchdata();
  }, []);

  async function cancelbooking(bookingid, roomid) {
    try {
      setloading(true);
      const result = await (
        await axios.post("api/bookings/cancelbooking", { bookingid, roomid })
      ).data;
      console.log(result);
      setloading(false);
      Swal.fire(
        "Congratulations",
        "Your booking has been cancelled successfully",
        "success"
      ).then((result) => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
      setloading(false);
      Swal.fire("Oops", "Something went wrong", "error");
    }
  }

  async function addreview(bookingid, roomid) {
    try {
      setloading(true);
      const result = await (
        await axios.post("api/bookings/getbookingsbyuserid/addreview", {
          bookingid,
          roomid,
          rating,
          review,
        })
      ).data;
      console.log(result);
      setloading(false);
      Swal.fire(
        "Congratulations",
        "Your review has been added successfully",
        "success"
      ).then((result) => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
      setloading(false);
      Swal.fire("Oops", "Something went wrong", "error");
    }
  }

  // const review = (e) => {
  //   setText(e.target.value);
  // };

  // const rating = (e) => {
  //   setNumber(e.target.value);
  // };

  //
  return (
    <div className="row">
      <div className="col-md-12 m-2">
        <h1 className="text-center">Bookings</h1>
        {/* {loading && <Loader />} */}
        {bookings.length &&
          bookings.map((booking) => {
            return (
              <div className="bs booking-card">
                <h1>{booking.room}</h1>
                <p>
                  <b>Booking ID: {booking._id}</b>
                </p>
                <p>
                  <b>Check In: {booking.fromdate}</b>
                </p>
                <p>
                  <b>Check Out: {booking.todate}</b>
                </p>
                <p>
                  <b>Amount: {booking.totalamount}</b>
                </p>
                {booking.status === "cancelled" ? (
                  <Tag color="red">CANCELLED</Tag>
                ) : (
                  <Tag color="green">CONFIRMED</Tag>
                )}
                {booking.status !== "cancelled" && (
                  <div className="text-right mt-2">
                    {" "}
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        cancelbooking(booking._id, booking.roomid);
                      }}
                    >
                      CANCEL BOOKING
                    </button>{" "}
                    <div className="d-flex flex-column justify-content-center">
                      <div className="" style={{ fontSize: "24px" }}>
                        Rating:
                      </div>
                      <div style={{ width: "50px" }}>
                        <input
                          type="number"
                          name="rating"
                          value={rating}
                          onChange={(e) => {
                            setRating(e.target.value);
                          }}
                        />
                      </div>
                      <div style={{ fontSize: "24px" }}>Review:</div>
                      <textarea
                        rows="10"
                        cols="50"
                        onChange={(e) => {
                          setReview(e.target.value);
                        }}
                        value={review}
                      ></textarea>
                      <div className="row mt-3">
                        <div className="col-2 offset-1">
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              addreview(
                                booking._id,
                                booking.roomid,
                                rating,
                                review
                              );
                            }}
                          >
                            ADD REVIEW
                          </button>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        {/* index.css
            p{
                font-size: 16px !important;
            } */}
      </div>
      {/* Add the following code in bookingsRoute.js just above exports */}
      {/* router.post("/getbookingsbyuserid",async(req,res)=>{
                const userid=req.body.userid
                try {
                    const bookings=await Bookings.find({userid : userid})
                    res.send(bookings)
                } catch (error) {
                    return res.status(400).json({error});
                }
        }); */}
    </div>
  );
}
//  In first useEffect in Bookingscreen.js add the following at the start
// if(!localStorage.getItem('currentUser')){
//     window.location.reload='/login'
// }
