import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
//import Loader and Error from Bookingscreen.js
import Swal from "sweetalert2";

const initialValue = {
  name: "",
  rentperday: "",
  maxcount: "",
  phonenumber: "",
  description: "",
  type: "",
};

const EditRoomscreen = () => {
  const [rooms, setrooms] = useState(initialValue);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const { id } = useParams();
  const { name, rentperday, maxcount, description, phonenumber, type } = rooms;

  async function editRoom() {
    try {
      setloading(true);
      const result = await (
        await axios.put(`/api/rooms/getallrooms/${id}`, rooms)
      ).data;
      console.log(result);
      setloading(false);
      Swal.fire("Congratulations", "Room added successfully", "success").then(
        (result) => {
          window.location.href = "/admin";
        }
      );
    } catch (error) {
      console.log(error);
      Swal.fire("Oops", "Something went wrong", "error");
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get(`/api/rooms/getallrooms/${id}`)
        ).data;
        setrooms(data);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(error);
      }
    }
    fetchData();
    // loadUserDetails();
  }, []);

  const onValueChange = (e) => {
    console.log(e.target.value);
    setrooms({ ...rooms, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="row w-100">
        <div className="col-md-6">
          {/* {loading && <Loader />} */}
          <input
            type="text"
            className="form-control"
            placeholder="Employee Name"
            value={name}
            name="name"
            onChange={(e) => onValueChange(e)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="rentperday"
            value={rentperday}
            name="rentperday"
            onChange={(e) => onValueChange(e)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="maxcount"
            value={maxcount}
            name="maxcount"
            onChange={(e) => onValueChange(e)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="phonenumber"
            value={phonenumber}
            name="phonenumber"
            onChange={(e) => onValueChange(e)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="description"
            value={description}
            name="description"
            onChange={(e) => onValueChange(e)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="type"
            value={type}
            name="type"
            onChange={(e) => onValueChange(e)}
          />

          <div className="text-right">
            <button className="btn btn-primary mt-2" onClick={() => editRoom()}>
              Edit Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRoomscreen;
