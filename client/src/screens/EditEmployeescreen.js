import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
//import Loader and Error from Bookingscreen.js
import Swal from "sweetalert2";

const initialValue = {
  ename: "",
  gender: "",
  age: "",
  phonenumber: "",
  employeetype: "",
  email: "",
  address: "",
  salary: "",
  imageurl1: "",
};

const EditEmployeescreen = () => {
  const [employees, setemployees] = useState(initialValue);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const { id } = useParams();
  const {
    ename,
    gender,
    age,
    phonenumber,
    employeetype,
    email,
    address,
    salary,
    imageurl1,
  } = employees;

  async function editEmployee() {
    try {
      setloading(true);
      const result = await (
        await axios.put(`/api/employees/getallemployees/${id}`, employees)
      ).data;
      console.log(result);
      setloading(false);
      Swal.fire(
        "Congratulations",
        "Employee added successfully",
        "success"
      ).then((result) => {
        window.location.href = "/admin";
      });
    } catch (error) {
      console.log(error);
      Swal.fire("Oops", "Something went wrong", "error");
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get(`/api/employees/getallemployees/${id}`)
        ).data;
        setemployees(data);
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
    setemployees({ ...employees, [e.target.name]: e.target.value });
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
            value={ename}
            name="ename"
            onChange={(e) => onValueChange(e)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="email"
            value={email}
            name="email"
            onChange={(e) => onValueChange(e)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="address"
            value={address}
            name="address"
            onChange={(e) => onValueChange(e)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="phonenumber"
            value={phonenumber}
            name="phonenumber"
            onChange={(e) => onValueChange(e)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="salary"
            value={salary}
            name="salary"
            onChange={(e) => onValueChange(e)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="age"
            value={age}
            name="age"
            onChange={(e) => onValueChange(e)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="employeetype"
            value={employeetype}
            name="employeetype"
            onChange={(e) => onValueChange(e)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="gender"
            value={gender}
            name="gender"
            onChange={(e) => onValueChange(e)}
          />
          {/* <input
            type="text"
            className="form-control"
            placeholder="image url"
            value={imageurl1}
            onChange={(e) => onValueChange(e)}
          /> */}

          <div className="text-right">
            <button
              className="btn btn-primary mt-2"
              onClick={() => editEmployee()}
            >
              Edit Employee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployeescreen;
