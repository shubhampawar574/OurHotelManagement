import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "../components/Room";
import "antd/dist/antd.css";
import { DatePicker, Space } from "antd";
import moment from "moment";
import "./Homescreen.css";

const { RangePicker } = DatePicker;

const Homescreen = () => {
  const [rooms, setrooms] = useState([]);
  const [duplicaterooms, setduplicaterooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const [fromdate, setfromdate] = useState();
  const [todate, settodate] = useState();

  const [searchkey, setsearchkey] = useState("");
  const [type, settype] = useState("all");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const rooms = (await axios.get("/api/rooms/getallrooms")).data;

        setrooms(rooms);
        setduplicaterooms(rooms);
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

  const filterByDate = (dates) => {
    // console.log(moment(dates[0]).format("DD-MM-YYYY"));
    // console.log(moment(dates[1]).format("DD-MM-YYYY"));
    setfromdate(moment(dates[0]).format("DD-MM-YYYY"));
    settodate(moment(dates[1]).format("DD-MM-YYYY"));

    var temprooms = [];
    var availability = false;
    for (const room of duplicaterooms) {
      if (room.currentbookings.length > 0) {
        for (let booking of room.currentbookings) {
          if (
            moment(moment(dates[0]).format("DD-MM-YYYY")).isBefore(
              booking.fromdate
            ) &&
            moment(moment(dates[1]).format("DD-MM-YYYY")).isAfter(
              booking.todate
            )
          ) {
            availability = false;
          } else if (
            !moment(moment(dates[0]).format("DD-MM-YYYY")).isBetween(
              booking.fromdate,
              booking.todate
            ) &&
            !moment(moment(dates[1]).format("DD-MM-YYYY")).isBetween(
              booking.fromdate,
              booking.todate
            )
          ) {
            if (
              moment(dates[0]).format("DD-MM-YYYY") !== booking.fromdate &&
              moment(dates[0]).format("DD-MM-YYYY") !== booking.todate &&
              moment(dates[1]).format("DD-MM-YYYY") !== booking.fromdate &&
              moment(dates[1]).format("DD-MM-YYYY") !== booking.todate
            ) {
              availability = true;
            }
          }
        }
      }
      if (availability === true || room.currentbookings.length === 0) {
        temprooms.push(room);
      }
      setrooms(temprooms);
    }
  };

  const filterBySearch = (e) => {
    const temprooms = duplicaterooms.filter((room) => {
      return (
        room.name.toLowerCase().includes(searchkey.toLowerCase()) ||
        room.description.toLowerCase().includes(searchkey.toLowerCase())
      );
    });

    setrooms(temprooms);
  };

  const filterByType = (e) => {
    settype(e);
    if (e != "all") {
      // const temprooms = duplicaterooms.filter((room) => {
      //   room.type.toLowerCase() === e.toLowerCase();
      // });
      const temprooms = duplicaterooms.filter((room) => {
        return room.type.toLowerCase() === e.toLowerCase();
      });
      setrooms(temprooms);
    } else {
      setrooms(duplicaterooms);
    }
  };

  return (
    <>
      {/* <h1>HOME SCREEN</h1>
      <h3>There are {rooms.length} rooms</h3> */}
      <div className="container">
        <div className="row mt-4 rooms bs filter">
          <div className="col-md-3 p-1">
            <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
          </div>

          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="search rooms"
              value={searchkey}
              onChange={(e) => {
                setsearchkey(e.target.value);
              }}
              onKeyUp={filterBySearch}
            />
          </div>

          <div className="col-md-5">
            <select
              className="form-control"
              value={type}
              onChange={(e) => {
                filterByType(e.target.value);
              }}
            >
              <option value="all">All</option>
              <option value="Family Room">Family Room</option>
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Duplex">Duplex</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center rooms ">
          {loading ? (
            <h1>LOADING..</h1>
          ) : error ? (
            <h1>ERROR..</h1>
          ) : (
            rooms.map((room) => {
              return (
                <div className="col-md-10 mt-2">
                  <Room room={room} fromdate={fromdate} todate={todate} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Homescreen;
