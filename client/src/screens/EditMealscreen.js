import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
//import Loader and Error from Bookingscreen.js
import Swal from "sweetalert2";

const initialValue = {
  name: "",
  cost: "",
  description: "",
  type: "",
};

const EditMealscreen = () => {
  // const [meals, setmeals] = useState(initialValue);
  // const [fileName, setfileName] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const [name, setname] = useState("");
  const [description, setdescription] = useState();
  const [type, settype] = useState();
  const [cost, setcost] = useState();
  // const [mealImage, setmealImage] = useState();
  const { id } = useParams();
  // const { name, description, type, cost, mealImage } = meals;
  const [filename, setfilename] = useState("");

  const onChangeFile = (e) => {
    setfilename(e.target.files[0]);
  };

  async function editMeal() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("type", type);
    formData.append("cost", cost);
    formData.append("mealImage", filename);
    try {
      setloading(true);
      // const result = await (
      //   await axios.put(`/api/meals/getallmeals/${id}`, formData)
      // ).data;
      const result = await axios.put(`/api/meals/getallmeals/${id}`, formData)
        .data;
      console.log(result);
      setloading(false);
      Swal.fire("Congratulations", "Meal edited successfully", "success").then(
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
        // const data = await (
        //   await axios.get(`/api/meals/getallmeals/${id}`)
        // ).data;
        const data = await axios.get(`/api/meals/getallmeals/${id}`).data;
        // setmeals(data);
        setname(data.name);
        setdescription(data.description);
        settype(data.type);
        setcost(data.cost);
        setfilename(data.mealImage);
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
  //   setmeals({ ...meals, [e.target.name]: e.target.value });
  // };

  return (
    <div>
      <div className="row w-100">
        <form onSubmit={editMeal} enctype="multipart/form-data">
          <div className="col-md-6">
            {/* {loading && <Loader />} */}
            {/* <input
            type="text"
            className="form-control"
            placeholder="Item Name"
            value={name}
            name="name"
            onChange={(e) => onValueChange(e)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="cost"
            value={cost}
            name="cost"
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
          <input
            type="file"
            className="form-control-file"
            filename="mealImage"
            placeholder="mealImage"
            value={mealImage}
            onChange={onChangeFile}
          /> */}

            <input
              type="text"
              className="form-control"
              placeholder="Item Name"
              value={name}
              name="name"
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="number"
              className="form-control"
              placeholder="cost"
              value={cost}
              name="cost"
              onChange={(e) => setcost(e.target.value)}
            />

            <input
              type="text"
              className="form-control"
              placeholder="description"
              value={description}
              name="description"
              onChange={(e) => setdescription(e.target.value)}
            />
          </div>
          <div className="col-md-6">
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
              filename="mealImage"
              placeholder="mealImage"
              // value={mealImage}
              onChange={onChangeFile}
            />

            <div className="text-right">
              {/* <button type="submit" className="btn btn-primary mt-2" onClick={() => editMeal()}>
                Edit Meal
              </button> */}
              <button type="submit" className="btn btn-primary mt-2">
                Edit Meal
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMealscreen;
