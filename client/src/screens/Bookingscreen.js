import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import env from "react-dotenv";
// import Loader from "../components/Loader";
// import Error from "../components/Error";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000,
});

const Bookingscreen = ({ match }) => {
  const [room, setroom] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fromdate = moment(match.params.fromdate, "DD-MM-YYYY");
  const todate = moment(match.params.todate, "DD-MM-YYYY");

  const totaldays = moment.duration(todate.diff(fromdate)).asDays() + 1;
  const [totalamount, settotalamount] = useState();

  useEffect(() => {
    if (!localStorage.getItem("currentUser")) {
      window.location.reload = "/login";
    }
    async function fetchData() {
      try {
        setLoading(true);
        const room = (
          await axios.post("/api/rooms/getroombyid", {
            roomid: match.params.roomid,
          })
        ).data;
        settotalamount(room.rentperday * totaldays);
        setroom(room);
        setLoading(false);
        // console.log(rooms.length);
      } catch (error) {
        setError(true);

        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const onToken = async (token) => {
    console.log(token);
    const bookingDetails = {
      room,
      userid: JSON.parse(localStorage.getItem("currentUser"))._id,
      username: JSON.parse(localStorage.getItem("currentUser")).name,
      fromdate,
      todate,
      totalamount,
      totaldays,
      token,
    };
    try {
      const result = await axios.post("/api/bookings/bookroom", bookingDetails);
      Swal.fire(
        "Congratulations",
        "Your room booked successfully",
        "success"
      ).then((result) => {
        window.location.href = "/profile";
      });
    } catch (error) {
      console.log(error);
      Swal.fire("OOPS", "Something went wrong", "error");
    }
  };

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <div className="container" data-aos="flip-left">
          <div className="row justify-content-center mt-4 bs ">
            <div className="col-md-6">
              <h1>{room.name}</h1>
              <img src={room.imageurls[1]} className="bigimg" alt={room.name} />
            </div>
            <div className="col-md-6">
              <div>
                <h1>Booking Details</h1>
                <hr />

                <b>
                  <p>
                    Name: {JSON.parse(localStorage.getItem("currentUser")).name}
                  </p>
                  <p>From Date: {match.params.fromdate}</p>
                  <p>To Date: {match.params.todate} </p>
                  <p>Max. count: {room.maxcount}</p>
                </b>
              </div>

              <div>
                <h1>Amount</h1>
                <hr />
                <b>
                  <p>Total Days: {totaldays} </p>
                  <p>Rent per day: {room.rentperday}</p>
                  <p>Total Amount: {totalamount} </p>
                </b>
              </div>

              <div style={{ float: "right", marginBottom: 8 }}>
                {/* <button className="btn btn-primary m-4" onClick={bookRoom}>
                  Pay Now
                </button> */}
                <StripeCheckout
                  amount={totalamount / 10}
                  currency="INR"
                  token={onToken}
                  stripeKey={env.STRIPE_API_KEY}
                >
                  <button className="btn btn-primary m-4">Pay Now</button>
                </StripeCheckout>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Bookingscreen;
