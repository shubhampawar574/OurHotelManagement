import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const logout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  };
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          CONNAUGHT ROYAL HOTEL
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <i class="fa-solid fa-bars" style={{ color: "white" }}></i>
          </span>
          s
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ms-auto ">
            <NavLink
              exact
              to="/"
              className="text-white links"
              activeStyle={{ borderBottom: "2px solid white" }}
            >
              Home
            </NavLink>
            {/* <NavLink to="/login" className="text-white links" activeStyle={{ borderBottom: "2px solid white" }}>Book Now</NavLink>
              <NavLink to="#gallery" className="text-white links">Gallery</NavLink> */}
            <NavLink
              to="/contactus"
              className="text-white links"
              activeStyle={{ borderBottom: "2px solid white" }}
            >
              Contact us
            </NavLink>

            {user ? (
              <>
                {/* <h1>{user.name}</h1> */}
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ marginLeft: "15px" }}
                  >
                    <i className="fa fa-user"></i> {user.name}
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="/profile">
                        My Profile
                      </a>
                    </li>
                    {!user.isAdmin ? (
                      <li>
                        <a class="dropdown-item" href="/booknow">
                          Book Now
                        </a>
                      </li>
                    ) : (
                      <li>
                        <a class="dropdown-item" href="/admin">
                          Admin Panel
                        </a>
                      </li>
                    )}
                    <li>
                      <a class="dropdown-item" href="/login" onClick={logout}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <NavLink
                to="/login"
                className="text-white links"
                activeStyle={{ borderBottom: "2px solid white" }}
              >
                Login
              </NavLink>
            )}
            {/* <li class="nav-item">
              <a class="nav-link" href="/register">
                Register
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
