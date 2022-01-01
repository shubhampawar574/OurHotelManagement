// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// // import Loader from "../components/Loader";
// // import Error from "../components/Error";
// // import Success from "../components/Success";

// const Registerscreen = () => {
//   const [name, setname] = useState("");
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const [cpassword, setcpassword] = useState("");

//   const [loading, setloading] = useState(false);
//   const [error, seterror] = useState();
//   // const [success, setsuccess] = useState();

//   const register = async () => {
//     if (password === cpassword) {
//       const User = {
//         name,
//         email,
//         password,
//         cpassword,
//       };
//       console.log(User);
//       try {
//         setloading(true);
//         const result = (await axios.post("/api/users/register", User)).data;
//         setloading(false);
//         // setsuccess(true);

//         setname("");
//         setemail("");
//         setpassword("");
//         setcpassword("");
//       } catch (err) {
//         console.log(err);
//         setloading(false);
//         seterror(true);
//       }
//     } else {
//       alert("Passwords not matched.");
//     }
//   };

//   return (
//     <>
//       {/* {loading && <Loader />}
//       {error && <Error message='Invalid credentials'/>} */}
//       <div className="row justify-content-center mt-5 ">
//         <div className="col-md-5 bs p-4">
//           {/* {success && <Success message="Registration Success" />} */}
//           <h2>Register</h2>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => {
//               setname(e.target.value);
//             }}
//           />
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
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Confirm Password"
//             value={cpassword}
//             onChange={(e) => {
//               setcpassword(e.target.value);
//             }}
//           />

//           <button className="btn btn-primary mt-2 " onClick={register}>
//             {" "}
//             Register
//           </button>
//           <div>
//             <Link to="/login">Click here to Login</Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// // useEffect(() => {
// //   async function add
// // })
// export default Registerscreen;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./form.css";
import Login from "./Loginscreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Loader from "../components/Loader";
// import Error from "../components/Error";
// import Success from "../components/Success";

const Registerscreen = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  // const [success, setsuccess] = useState();

  const validate = (name, email, password, cpassword) => {
    const errors = {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    };
    if (name.length < 3 && name !== "")
      errors.name = "Name should be >= 3 characters";

    const emreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emreg.test(email) && email !== "")
      errors.email = "Email id is not valid";

    if (password.length < 8 && password !== "")
      errors.password = "Password should be >= 8 characters";
    if (password != cpassword) errors.cpassword = "Password doesn't match";
    return errors;
  };

  const register = async () => {
    if (
      password === cpassword &&
      name.length >= 3 &&
      password.length >= 8 &&
      errors.email === ""
    ) {
      const User = {
        name,
        email,
        password,
        cpassword,
      };
      console.log(User);
      try {
        setloading(true);
        const result = (await axios.post("/api/users/register", User)).data;
        setloading(false);
        // setsuccess(true);

        setname("");
        setemail("");
        setpassword("");
        setcpassword("");
      } catch (err) {
        console.log(err);
        setloading(false);
        seterror(true);
      }
    } else {
      alert(
        "Invalid details. Please follow the guidelines while entering your details"
      );
    }
  };
  const errors = validate(name, email, password, cpassword);
  console.log(errors);
  return (
    // <>
    //   {/* {loading && <Loader />}
    //   {error && <Error message='Invalid credentials'/>} */}
    //   <div className="row justify-content-center mt-5 ">
    //     <div className="col-md-5 bs p-4">
    //       {/* {success && <Success message="Registration Success" />} */}
    //       <h2>Register</h2>
    // <input
    //   type="text"
    //   className="form-control"
    //   placeholder="Name"
    //   value={name}
    //   onChange={(e) => {
    //     setname(e.target.value);
    //   }}
    // />
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
    //       <input
    //         type="password"
    //         className="form-control"
    //         placeholder="Confirm Password"
    //         value={cpassword}
    //         onChange={(e) => {
    //           setcpassword(e.target.value);
    //         }}
    //       />

    //       <button className="btn btn-primary mt-2 " onClick={register}>
    //         {" "}
    //         Register
    //       </button>
    //       <div>
    //         <Link to="/login">Click here to Login</Link>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <form className="signup">
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          valid={errors.name === ""}
          invalid={errors.name !== ""}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <div className="error">{errors.name}</div>
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="Email"
          value={email}
          valid={errors.email === ""}
          invalid={errors.email !== ""}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <div className="error">{errors.email}</div>
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          placeholder="Password"
          value={password}
          valid={errors.password === ""}
          invalid={errors.password !== ""}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <div className="error">{errors.password}</div>
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          name="cpassword"
          id="cpassword"
          className="form-control"
          placeholder="Confirm Password"
          value={cpassword}
          valid={errors.cpassword === ""}
          invalid={errors.cpassword !== ""}
          onChange={(e) => {
            setcpassword(e.target.value);
          }}
        />
        <div className="error">{errors.cpassword}</div>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={register}
      >
        <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          Sign Up{" "}
        </Link>
      </button>
      <p className="forgot-password text-right">
        Already registered
        <Link className="nav-link" to={"/login"}>
          Login?
        </Link>
      </p>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </form>
  );
};

export default Registerscreen;
