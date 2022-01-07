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
  // const [rooms, setrooms] = useState(initialValue);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const { id } = useParams();
  // const { name, rentperday, maxcount, description, phonenumber, type } = rooms;
  const [name, setname] = useState("");
  const [rentperday, setrentperday] = useState();
  const [maxcount, setmaxcount] = useState();
  const [phonenumber, setphonenumber] = useState();
  const [description, setdescription] = useState();
  const [type, settype] = useState();

  const [filename, setfilename] = useState("");

  const onChangeFile = (e) => {
    setfilename(e.target.files[0]);
  };

  async function editRoom() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("rentperday", rentperday);
    formData.append("maxcount", maxcount);
    formData.append("phonenumber", phonenumber);
    formData.append("description", description);
    formData.append("type", type);

    formData.append("roomImage", filename);
    try {
      setloading(true);
      const result = await axios.put(`/api/rooms/getallrooms/${id}`, formData)
        .data;
      console.log(result);
      setloading(false);
      Swal.fire("Congratulations", "Room edited successfully", "success").then(
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
        const data = await axios.get(`/api/rooms/getallrooms/${id}`).data;
        // setrooms(data);
        setname(data.name);
        setrentperday(data.rentperday);
        setmaxcount(data.maxcount);
        setphonenumber(data.phonenumber);
        setdescription(data.description);
        settype(data.type);

        setfilename(data.roomImage);
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

  // const onValueChange = (e) => {
  //   console.log(e.target.value);
  //   setrooms({ ...rooms, [e.target.name]: e.target.value });
  // };

  return (
    <div>
      <div className="row w-100">
        <form onSubmit={editRoom} enctype="multipart/form-data">
          <div className="col-md-12">
            {/* {loading && <Loader />} */}
            <input
              type="text"
              className="form-control"
              placeholder="Room Name"
              value={name}
              name="name"
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="number"
              className="form-control"
              placeholder="rentperday"
              value={rentperday}
              name="rentperday"
              onChange={(e) => setrentperday(e.target.value)}
            />
            <input
              type="number"
              className="form-control"
              placeholder="maxcount"
              value={maxcount}
              name="maxcount"
              onChange={(e) => setmaxcount(e.target.value)}
            />
            <input
              type="number"
              className="form-control"
              placeholder="phonenumber"
              value={phonenumber}
              name="phonenumber"
              onChange={(e) => setphonenumber(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="description"
              value={description}
              name="description"
              onChange={(e) => setdescription(e.target.value)}
            />
            {/* </div>
            <div className="col-md-6"> */}
            <input
              type="text"
              className="form-control"
              placeholder="type"
              value={type}
              name="type"
              onChange={(e) => settype(e.target.value)}
            />

            <input
              type="file"
              className="form-control-file"
              filename="roomImage"
              placeholder="roomImage"
              // value={mealImage}
              onChange={onChangeFile}
            />

            <div className="text-right">
              <button type="submit" className="btn btn-primary mt-2">
                Edit Room
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRoomscreen;
