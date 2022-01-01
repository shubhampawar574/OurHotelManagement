// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Loginscreen = () => {
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState();

//   const login = async () => {
//     const User = {
//       email,
//       password,
//     };
//     console.log(User);
//     try {
//       setLoading(true);
//       const result = (await axios.post("/api/users/login", User)).data;
//       setLoading(false);

// localStorage.setItem("currentUser", JSON.stringify(result));
// if (JSON.parse(localStorage.getItem("currentUser")).isAdmin) {
//   window.location.href = "/admin";
// } else {
//   window.location.href = "/home";
// }
//     } catch (err) {
//       console.log(err);
//       setLoading(false);
//       setError(true);
//     }
//   };

//   return (
//     <>
//       {/* {loading && <Loader />}
//       {error && <Error message='Invalid credentials'/>} */}
//       <div className="row justify-content-center mt-5 ">
//         <div className="col-md-5 bs p-4">
//           <h2>Login</h2>

//           <input
//             type="email"
//             className="form-control"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => {
//               setemail(e.target.value);
//             }}
//           />
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => {
//               setpassword(e.target.value);
//             }}
//           />

//           <button className="btn btn-primary mt-2 " onClick={login}>
//             {" "}
//             Login
//           </button>
//           <div>
//             <Link to="/register">Click here to Register</Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Loginscreen;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./form.css";
import Signup from "./Registerscreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Loginscreen = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const login = async () => {
    const User = {
      email,
      password,
    };
    console.log(User);
    try {
      setLoading(true);
      const result = (await axios.post("/api/users/login", User)).data;
      setLoading(false);
      console.log(result);
      localStorage.setItem("currentUser", JSON.stringify(result));
      if (JSON.parse(localStorage.getItem("currentUser")).isAdmin) {
        window.location.href = "/admin";
      } else {
        window.location.href = "/booknow";
      }
      // localStorage.setItem("currentUser", JSON.stringify(result));
      // window.location.href = "/booknow";
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  };

  return (
    // <>
    //   {/* {loading && <Loader />}
    //   {error && <Error message='Invalid credentials'/>} */}
    //   <div className="row justify-content-center mt-5 ">
    //     <div className="col-md-5 bs p-4">
    //       <h2>Login</h2>

    // <input
    //   type="email"
    //   className="form-control"
    //   placeholder="Email"
    //   value={email}
    //   onChange={(e) => {
    //     setemail(e.target.value);
    //   }}
    // />
    // <input
    //   type="password"
    //   className="form-control"
    //   placeholder="Password"
    //   value={password}
    //   onChange={(e) => {
    //     setpassword(e.target.value);
    //   }}
    // />

    //       <button className="btn btn-primary mt-2 " onClick={login}>
    //         {" "}
    //         Login
    //       </button>
    //       <div>
    //         <Link to="/register">Click here to Register</Link>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <div>
      <h3>Log In</h3>

      <div className="form-group">
        <label>Email address</label>

        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
      </div>
      {/* 
      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="customCheck1" />
          <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        </div>
      </div> */}

      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={login}
      >
        {" "}
        Login
      </button>
      <p className="forgot-password text-right">
        Don't have an account
        <Link className="nav-link" to="/register">
          Signup?
        </Link>
      </p>
      <Switch>
        <Route path="/register" component={Signup} />
      </Switch>
    </div>
  );
};

export default Loginscreen;
