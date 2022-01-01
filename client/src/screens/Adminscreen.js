import React, { useState, useEffect } from "react";
// import App from "../src/App";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Tabs } from "antd";
import axios from "axios";
//import Loader and Error from Bookingscreen.js
import Swal from "sweetalert2";
const { TabPane } = Tabs;

function Adminscreen() {
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("currentUser")).isAdmin) {
      window.location.href = "/home";
    }
  }, []);
  return (
    <div className="bs admin-box">
      <h2 className="text-center" style={{ fontSize: "30px" }}>
        <b>Admin Panel</b>
      </h2>
      <Tabs defaultActiveKey="1" className="d-flex align-items-center">
        <TabPane tab="Bookings" key="1">
          <Bookings />
        </TabPane>
        <TabPane tab="Add Room" key="3">
          {/* <h1>Add Room</h1> */}
          <AddRoom />
        </TabPane>
        <TabPane tab="Rooms" key="2">
          <Rooms />
        </TabPane>

        <TabPane tab="Add Employee" key="5">
          {/* <h1>Add Room</h1> */}
          <Addemployee />
        </TabPane>
        <TabPane tab="Employees" key="6">
          {/* <h1>Add Room</h1> */}
          <Employees />
        </TabPane>
        <TabPane tab="Add Meal" key="7">
          {/* <h1>Add Room</h1> */}
          <AddMeal />
        </TabPane>
        <TabPane tab="Meals" key="8">
          {/* <h1>Add Room</h1> */}
          <Meals />
        </TabPane>
        <TabPane tab="Users" key="4">
          <Users />
        </TabPane>
        <TabPane tab="Reviews" key="9">
          <Reviews />
        </TabPane>
      </Tabs>
    </div>
    // Add route in App.js
  );
}

export default Adminscreen;

// Bookings list component
export function Bookings() {
  const [bookings, setbookings] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get("/api/bookings/getallbookings")
        ).data;
        setbookings(data);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(error);
      }
    }
    fetchData();
  }, []);
  return (
    // <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 w-100">
        <h1 className="text-center">Bookings</h1>
        {/* {loading && <Loader />} */}
        <table className="table table-bordered table-striped table-dark table-hover">
          <thead className="bs">
            <tr>
              <th>Booking ID</th>
              <th>User ID</th>
              <th>User Name</th>
              <th>Room</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings.map((booking) => {
                return (
                  <tr>
                    <td>{booking._id}</td>
                    <td>{booking.userid}</td>
                    <td>{booking.username}</td>
                    <td>{booking.room}</td>
                    <td>{booking.fromdate}</td>
                    <td>{booking.todate}</td>
                    <td>{booking.status}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
    // </div>
  );
}

// Rooms list component
export function Rooms() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (await axios.get("/api/rooms/getallrooms")).data;
        setrooms(data);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(error);
      }
    }
    fetchData();
  }, []);

  const deleteRoomData = async (id) => {
    await axios.delete(`/api/rooms/getallrooms/${id}`);
    getAllEmployees();
  };

  const getAllEmployees = async () => {
    let response = await axios.get(`/api/rooms/getallrooms/`);
    setrooms(response.data);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Rooms</h1>
        {/* {loading && <Loader />} */}
        <table className="table table-bordered table-striped table-dark table-hover">
          <thead className="bs">
            <tr>
              <th>Room ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Rent per day</th>
              <th>Max count</th>
              <th>Phone number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {rooms &&
              rooms.map((room) => {
                return (
                  <tr>
                    <td>{room._id}</td>
                    <td>{room.name}</td>
                    <td>{room.type}</td>
                    <td>{room.rentperday}</td>
                    <td>{room.maxcount}</td>
                    <td>{room.phonenumber}</td>
                    <td>
                      <Button className="btn-primary">
                        {" "}
                        <Link
                          to={`/editRoom/${room._id}`}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Edit
                        </Link>
                      </Button>
                    </td>
                    <td>
                      <Button
                        className="btn-danger"
                        onClick={() => deleteRoomData(room._id)}
                      >
                        {" "}
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Users list component
export function Users() {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await (await axios.get("/api/users/getallusers")).data;
        setusers(data);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(error);
      }
    }
    fetchdata();
  }, []);
  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Users</h1>
        {/* {loading && <Loader />} */}
        <table className="table table-bordered table-striped table-dark table-hover">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Is Admin</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.isAdmin ? "Yes" : "No"}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Add room component

export function AddRoom() {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const [name, setname] = useState("");
  const [rentperday, setrentperday] = useState();
  const [maxcount, setmaxcount] = useState();
  const [description, setdescription] = useState();
  const [phonenumber, setphonenumber] = useState();
  const [type, settype] = useState();
  const [imageurl1, setimageurl1] = useState();
  const [imageurl2, setimageurl2] = useState();
  const [imageurl3, setimageurl3] = useState();

  async function addRoom() {
    const newroom = {
      name,
      rentperday,
      maxcount,
      description,
      phonenumber,
      type,
      imageurls: [imageurl1, imageurl2, imageurl3],
    };
    try {
      setloading(true);
      const result = await (
        await axios.post("api/rooms/addroom", newroom)
      ).data;
      console.log(result);
      setloading(false);
      Swal.fire(
        "Congratulations",
        "Your Room added successfully",
        "success"
      ).then((result) => {
        window.location.href = "/home";
      });
    } catch (error) {
      console.log(error);
      Swal.fire("Oops", "Something went wrong", "error");
    }
  }
  return (
    <div className="row mb-4 w-100">
      <div className="col-md-5">
        {/* {loading && <Loader />} */}
        <input
          type="text"
          className="form-control"
          placeholder="room name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="rent per day"
          value={rentperday}
          onChange={(e) => {
            setrentperday(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="max count"
          value={maxcount}
          onChange={(e) => {
            setmaxcount(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="description"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="phone number"
          value={phonenumber}
          onChange={(e) => {
            setphonenumber(e.target.value);
          }}
        />
      </div>
      <div className="col-md-5">
        <input
          type="text"
          className="form-control"
          placeholder="type"
          value={type}
          onChange={(e) => {
            settype(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="image url 1"
          value={imageurl1}
          onChange={(e) => {
            setimageurl1(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="image url 2"
          value={imageurl2}
          onChange={(e) => {
            setimageurl2(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="image url 3"
          value={imageurl3}
          onChange={(e) => {
            setimageurl3(e.target.value);
          }}
        />

        <div className="text-right">
          <button className="btn btn-primary mt-2" onClick={addRoom}>
            Add Room
          </button>
        </div>
      </div>
    </div>
  );
}

///Admin panel add employee
export function Addemployee() {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const [ename, setename] = useState("");
  // const [rentperday, setrentperday] = useState();
  const [gender, setgender] = useState();
  const [age, setage] = useState();
  const [phonenumber, setphonenumber] = useState();
  const [employeetype, setemployeetype] = useState();
  const [email, setemail] = useState();
  const [address, setaddress] = useState();
  const [salary, setsalary] = useState();
  const [imageurl1, setimageurl1] = useState();

  async function addEmployee() {
    const newemployee = {
      ename,
      email,
      address,
      salary,
      phonenumber,
      imageurl1,
      age,
      employeetype,
      gender,
    };
    try {
      setloading(true);
      const result = await (
        await axios.post("api/employees/addemployee", newemployee)
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
  return (
    <div className="row mb-4 w-100">
      <div className="col-md-6">
        {/* {loading && <Loader />} */}
        <input
          type="text"
          className="form-control"
          placeholder="Employee Name"
          value={ename}
          onChange={(e) => {
            setename(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="address"
          value={address}
          onChange={(e) => {
            setaddress(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="phonenumber"
          value={phonenumber}
          onChange={(e) => {
            setphonenumber(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="salary"
          value={salary}
          onChange={(e) => {
            setsalary(e.target.value);
          }}
        />
      </div>
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="age"
          value={age}
          onChange={(e) => {
            setage(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="employeetype"
          value={employeetype}
          onChange={(e) => {
            setemployeetype(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="gender"
          value={gender}
          onChange={(e) => {
            setgender(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="image url"
          value={imageurl1}
          onChange={(e) => {
            setimageurl1(e.target.value);
          }}
        />

        <div className="text-right">
          <button className="btn btn-primary mt-2" onClick={addEmployee}>
            Add Employee
          </button>
        </div>
      </div>
    </div>
  );
}

export function Employees() {
  const [employees, setemployees] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get("/api/employees/getallemployees")
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
    // getAllEmployees();
  }, []);

  const deleteUserData = async (id) => {
    await axios.delete(`/api/employees/getallemployees/${id}`);
    getAllEmployees();
  };

  const getAllEmployees = async () => {
    let response = await axios.get(`/api/employees/getallemployees/`);
    setemployees(response.data);
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Employees</h1>
        {/* {loading && <Loader />} */}
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-dark table-hover">
            <thead className="bs">
              <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Employee Type</th>
                <th>Salary</th>
                <th>Address</th>
                <th>Phone number</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {employees &&
                employees.map((employee) => {
                  return (
                    <tr>
                      <td>{employee._id}</td>
                      <td>{employee.ename}</td>
                      <td>{employee.employeetype}</td>
                      <td>{employee.salary}</td>
                      <td>{employee.address}</td>
                      <td>{employee.phonenumber}</td>
                      <td>{employee.age}</td>
                      <td>{employee.gender}</td>
                      <td>
                        <Button className="btn-primary">
                          {" "}
                          <Link
                            to={`/editEmployee/${employee._id}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Edit
                          </Link>
                        </Button>
                      </td>
                      <td>
                        <Button
                          className="btn-danger"
                          onClick={() => deleteUserData(employee._id)}
                        >
                          {" "}
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function AddMeal() {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const [name, setname] = useState("");
  const [description, setdescription] = useState();
  const [type, settype] = useState();
  const [cost, setcost] = useState();
  const [imageurl1, setimageurl1] = useState();
  const [imageurl2, setimageurl2] = useState();
  const [imageurl3, setimageurl3] = useState();

  async function addmeal() {
    const newmeal = {
      name,
      description,
      type,
      cost,
      imageurls: [imageurl1, imageurl2, imageurl3],
    };
    try {
      setloading(true);
      const result = await (
        await axios.post("api/meals/addmeal", newmeal)
      ).data;
      console.log(result);
      setloading(false);
      Swal.fire(
        "Congratulations",
        "Your Meal Item added successfully",
        "success"
      ).then((result) => {
        window.location.href = "/admin";
      });
    } catch (error) {
      console.log(error);
      Swal.fire("Oops", "Something went wrong", "error");
    }
  }
  return (
    <div className="row mb-4">
      <div className="col-md-5">
        {/* {loading && <Loader />} */}
        <input
          type="text"
          className="form-control"
          placeholder="Item name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Item type"
          value={type}
          onChange={(e) => {
            settype(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Cost"
          value={cost}
          onChange={(e) => {
            setcost(e.target.value);
          }}
        />
      </div>
      <div className="col-md-5">
        <input
          type="text"
          className="form-control"
          placeholder="image url 1"
          value={imageurl1}
          onChange={(e) => {
            setimageurl1(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="image url 2"
          value={imageurl2}
          onChange={(e) => {
            setimageurl2(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="image url 3"
          value={imageurl3}
          onChange={(e) => {
            setimageurl3(e.target.value);
          }}
        />

        <div className="text-right">
          <button className="btn btn-primary mt-2" onClick={addmeal}>
            Add Meal
          </button>
        </div>
      </div>
    </div>
  );
}

export function Meals() {
  const [meals, setmeals] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (await axios.get("/api/meals/getallmeals")).data;
        setmeals(data);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(error);
      }
    }
    fetchData();
  }, []);

  const deleteMealData = async (id) => {
    await axios.delete(`/api/meals/getallmeals/${id}`);
    getAllMeals();
  };

  const getAllMeals = async () => {
    let response = await axios.get(`/api/meals/getallmeals/`);
    setmeals(response.data);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Menu</h1>
        {/* {loading && <Loader />} */}
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-dark table-hover">
            <thead className="bs">
              <tr>
                <th>Meal Name</th>
                <th>Meal Type</th>
                <th>Description</th>
                <th>Cost</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {meals &&
                meals.map((meal) => {
                  return (
                    <tr>
                      <td>{meal.name}</td>
                      <td>{meal.type}</td>
                      <td>{meal.description}</td>
                      <td>{meal.cost}</td>
                      <td>
                        <Button className="btn-primary">
                          {" "}
                          <Link
                            to={`/editMeal/${meal._id}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Edit
                          </Link>
                        </Button>
                      </td>
                      <td>
                        <Button
                          className="btn-danger"
                          onClick={() => deleteMealData(meal._id)}
                        >
                          {" "}
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  const [reviews, setreviews] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (await axios.get("/api/reviews/getallreviews")).data;
        setreviews(data);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Reviews</h1>
        {/* {loading && <Loader />} */}
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-dark table-hover">
            <thead className="bs">
              <tr>
                <th>Room Name</th>
                <th>User Name</th>
                <th>Rating</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {reviews &&
                reviews.map((review) => {
                  return (
                    <tr>
                      <td>{review.roomname}</td>
                      <td>{review.username}</td>
                      <td>{review.rating}</td>
                      <td>{review.review}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
