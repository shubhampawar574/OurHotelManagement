import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div class="mt-5 pt-3 pb-1 footer">
      <div class="container-fluid">
        <div class="row pb-2">
          <div class="col-lg-4 col-xs-12 about-company">
            <div style={{ fontSize: "30px", color: "yellowgreen" }}>
              <u>ASSAN Hotel</u>
            </div>
            <p class="pr-5 text-white">
              ASSAN Hotels Limited is India’s largest hotel chain in the
              mid-priced hotel sector, and the third largest overall, on the
              basis of controlling interest in owned and leased rooms, as of
              June 30, 2021, according to the Horwath Report.{" "}
            </p>
          </div>
          <div class="col-lg-2 offset-1 col-xs-12 links">
            <div class="mt-lg-0" style={{ fontSize: "18px" }}>
              Links
            </div>
            <ul class="m-0 p-0">
              <li>
                - <a href="/booknow">Book Now</a>
              </li>
              <li>
                - <a href="#gallery">Gallery</a>
              </li>
              <li>
                - <a href="#aboutus">About Us</a>
              </li>
              <li>
                - <a href="/contactus">Contact Us</a>
              </li>
              <li>
                - <a href="#">Reviews</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-xs-12 location">
            <div
              class="mt-lg-0"
              style={{ fontSize: "18px", color: "yellowgreen" }}
            >
              Location
            </div>
            <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
            <p class="mb-0">
              <i class="fa fa-phone mr-3"></i>(541) 754-3010
            </p>
            <p>
              <i class="fa fa-envelope-o mr-3"></i>info@hsdf.com
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col copyright">
            <p class="text-center">
              <small class="text-white">© 2021. All Rights Reserved.</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
