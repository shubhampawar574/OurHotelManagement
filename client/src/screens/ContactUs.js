import React from "react";
import Footer from "../components/Footer";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Container, Row, Col, Button } from 'reactstrap';
// import Input from "../components/Input"
// import Textarea from '../components/Textarea';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import EmailIcon from '@mui/icons-material/Email';
// import styles from "./styles.css"
import img from "../resources/locationImage.png";
import "./styles.css";

const ContactUs = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>

        <div class="row row-content">
          <div class="col-12">
            <h3 className="text-center mb-5">Location Information</h3>
          </div>
          <div class="col-12 col-sm-3 offset-sm-1">
            <h5>Our Address</h5>
            <address style={{ fontSize: "20px" }}>
              {/* 121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br /> */}
              Connaught Royale, 106, Babar Rd, Fire Brigade Lane, Barakhamba,
              New Delhi, Delhi 110001
              <br />
              <i class="fa fa-phone"></i>:+91 9111891115
              <br />
              {/* <i class="fa fa-fax"></i>: +852 8765 4321
              <br /> */}
              {/* <i class="fa fa-envelope"></i>: */}
              <a href="mailto:confusion@hotel.net">
                http://www.connaughtroyale.com/
              </a>
            </address>
          </div>
          <div class="col-12 col-sm-6 ">
            <h5>Map of our Location</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112100.58389723!2d77.10986588398681!3d28.595479159588315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd31c8743713%3A0xb10cec638186aebc!2sHotel%20Connaught%20Royale%2C%20Delhi!5e0!3m2!1sen!2sin!4v1641564622253!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              title="delhihotel"
            ></iframe>
            {/* <img src={img} style={{ width: "500px" }} /> */}
          </div>
          {/* <div class="col-12 col-sm-4 offset-sm-1">
            <div class="btn-group" role="group">
              <a role="button" class="btn btn-primary" href="tel:+85212345678">
                <i class="fa fa-phone"></i> Call
              </a>
              <a role="button" class="btn btn-info">
                {" "}
                Skype
              </a>
              <a
                role="button"
                class="btn btn-success"
                href="mailto:confusion@hotel.net"
              >
                Email
              </a>
            </div>
          </div> */}
        </div>

        {/* <div class="row row-content">
          <div class="col-12">
            <h3>Send us your Feedback</h3>
          </div>
          <div class="col-12 col-md-9">
            <form>
              <div class="form-group row">
                <label for="firstname" class="col-md-2 col-form-label">
                  First Name
                </label>
                <div class="col-md-10">
                  <input
                    type="text"
                    class="form-control"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="lastname" class="col-md-2 col-form-label">
                  Last Name
                </label>
                <div class="col-md-10">
                  <input
                    type="text"
                    class="form-control"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="telnum" class="col-12 col-md-2 col-form-label">
                  Contact Tel.
                </label>
                <div class="col-5 col-md-3">
                  <input
                    type="tel"
                    class="form-control"
                    id="areacode"
                    name="areacode"
                    placeholder="Area code"
                  />
                </div>
                <div class="col-7 col-md-7">
                  <input
                    type="tel"
                    class="form-control"
                    id="telnum"
                    name="telnum"
                    placeholder="Tel. number"
                  />
                </div>
              </div>
              <div class="form-group row" style={{ marginBottom: "10px" }}>
                <label for="emailid" class="col-md-2 col-form-label">
                  Email
                </label>
                <div class="col-md-10">
                  <input
                    type="email"
                    class="form-control"
                    id="emailid"
                    name="emailid"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="feedback" class="col-md-2 col-form-label">
                  Your Feedback
                </label>
                <div class="col-md-10">
                  <textarea
                    class="form-control"
                    id="feedback"
                    name="feedback"
                    rows="12"
                    style={{ border: "1px solid black" }}
                  ></textarea>
                </div>
              </div>
              <div class="form-group row">
                <div class="offset-md-2 col-md-10">
                  <button type="submit" class="btn btn-primary">
                    Send Feedback
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-12 col-md"></div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};
export default ContactUs;
