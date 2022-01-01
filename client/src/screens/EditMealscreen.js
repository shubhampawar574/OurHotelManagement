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
  const [meals, setmeals] = useState(initialValue);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const { id } = useParams();
  const { name, description, type, cost } = meals;

  async function editMeal() {
    try {
      setloading(true);
      const result = await (
        await axios.put(`/api/meals/getallmeals/${id}`, meals)
      ).data;
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
        const data = await (
          await axios.get(`/api/meals/getallmeals/${id}`)
        ).data;
        setmeals(data);
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
    setmeals({ ...meals, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="row w-100">
        <div className="col-md-6">
          {/* {loading && <Loader />} */}
          <input
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

          <div className="text-right">
            <button className="btn btn-primary mt-2" onClick={() => editMeal()}>
              Edit Meal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMealscreen;
