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
      window.location.href = "/booknow";
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
              <th>Room Image</th>
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
                    <td>
                      <div style={{ textAlign: "center", padding: "2px" }}>
                        {room.roomImage ? (
                          <img
                            src={`/uploads1/${room.roomImage}`}
                            alt="roomImage"
                            style={{ width: " 60%" }}
                          />
                        ) : (
                          <img
                            src="data:image/jpeg;base64,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"
                            alt="roomImage"
                            style={{ width: " 60%" }}
                          />
                        )}
                        {/* <img
                          src={`/uploads1/${room.roomImage}`}
                          alt="roomImage"
                          style={{ width: " 60%" }}
                        /> */}
                      </div>
                    </td>
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
  const [roomImage, setroomImage] = useState();
  const [fileName, setfileName] = useState("");
  // const [imageurl2, setimageurl2] = useState();
  // const [imageurl3, setimageurl3] = useState();

  const onChangeFile = (e) => {
    setfileName(e.target.files[0]);
  };

  async function addRoom() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("rentperday", rentperday);
    formData.append("maxcount", maxcount);
    formData.append("description", description);
    formData.append("phonenumber", phonenumber);
    formData.append("type", type);

    formData.append("roomImage", fileName);
    const newroom = {
      name,
      rentperday,
      maxcount,
      description,
      phonenumber,
      type,
      roomImage,
    };
    try {
      setloading(true);
      const result = await (
        await axios.post("api/rooms/addroom", formData)
      ).data;
      console.log(result);
      setloading(false);
      Swal.fire(
        "Congratulations",
        "Your Room added successfully",
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
      <form onSubmit={addRoom} enctype="multipart/form-data">
        <div className="col-md-10">
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
          {/* </div>
          <div className="col-md-5"> */}
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
            type="file"
            className="form-control-file"
            filename="roomImage"
            placeholder="roomImage"
            value={roomImage}
            onChange={onChangeFile}
          />
          {/* <input
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
          /> */}

          <div className="text-right">
            <button type="submit" className="btn btn-primary mt-2">
              Add Room
            </button>
          </div>
        </div>
      </form>
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
  // const [imageurl1, setimageurl1] = useState();

  async function addEmployee() {
    const newemployee = {
      ename,
      email,
      address,
      salary,
      phonenumber,
      // imageurl1,
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
        {/* <input
          type="text"
          className="form-control"
          placeholder="image url"
          value={imageurl1}
          onChange={(e) => {
            setimageurl1(e.target.value);
          }}
        /> */}

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
  const [mealImage, setmealImage] = useState();
  const [fileName, setfileName] = useState("");
  // const [mealImageurl2, setmealImageurl2] = useState();
  // const [mealImageurl3, setImageurl3] = useState();

  const onChangeFile = (e) => {
    setfileName(e.target.files[0]);
  };

  async function addmeal() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("type", type);
    formData.append("cost", cost);
    formData.append("mealImage", fileName);
    const newmeal = {
      name,
      description,
      type,
      cost,
      mealImage,
    };
    try {
      setloading(true);
      const result = await (
        await axios.post("api/meals/addmeal", formData)
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
      <form onSubmit={addmeal} enctype="multipart/form-data">
        <div className="col-md-12">
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
          {/* </div>
          <div className="col-md-12"> */}
          <input
            type="text"
            className="form-control"
            placeholder="Cost"
            value={cost}
            onChange={(e) => {
              setcost(e.target.value);
            }}
          />
          <input
            type="file"
            className="form-control-file"
            filename="mealImage"
            placeholder="mealImage"
            value={mealImage}
            onChange={onChangeFile}
          />
        </div>
        <div className="text-right">
          <button type="submit" className="btn btn-primary mt-2">
            Add Meal
          </button>
        </div>
      </form>
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
                <th>Meal Image</th>
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
                      <td>
                        <div style={{ textAlign: "center", padding: "2px" }}>
                          <img
                            src={`/uploads/${meal.mealImage}`}
                            alt="mealImage"
                            style={{ width: " 60%" }}
                          />
                        </div>
                      </td>
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
